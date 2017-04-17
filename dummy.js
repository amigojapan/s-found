line function getParameterByName(name) {
line name = name.replace(/[[]/, "\[").replace(/[]]/, "\]");
line var regex = new RegExp("[\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
line return results === null ? "" : decodeURIComponent(results[1].replace(/+/g, " "));
line }
line window.addEventListener('load', function(){//there is another onload further down, I think maybe I should merge it into this in hte future. I think maybe this one is the newer kind, I think just make the second one into a normal function and call it from here
line //binding screen controller events
line var box1 = document.getElementById('btnA')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnAmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnAmouseUp();
line e.preventDefault()
line }, false)
line var box1 = document.getElementById('btnB')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnBmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnBmouseUp();
line e.preventDefault()
line }, false)
line var box1 = document.getElementById('btnUp')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnUpmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnUpmouseUp();
line e.preventDefault()
line }, false)
line var box1 = document.getElementById('btnDown')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnDownmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnDownmouseUp();
line e.preventDefault()
line }, false)
line var box1 = document.getElementById('btnLeft')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnLeftmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnLeftmouseUp();
line e.preventDefault()
line }, false)
line var box1 = document.getElementById('btnRight')
line box1.addEventListener('touchstart', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
line btnRightmouseDown();
line e.preventDefault()
line }, false)
line box1.addEventListener('touchend', function(e){
line var touchobj = e.changedTouches[0] // reference first touch point for this event
line btnRightmouseUp();
line e.preventDefault()
line }, false)
line //load example if anyis given by URL
line var URL = getParameterByName("LoadFromUrl");
line if(typeof URL != 'undefined') {
line loadURLproject(URL,false);
line }
line var URL = getParameterByName("LoadFromUrlAndRun");
line if(typeof URL != 'undefined') {
line loadURLproject(URL,true);
line }
line }, false)
line //screen controller
line var onScreenKeyboard={};
line onScreenKeyboard.btnAPressed=false;
line function btnAmouseDown() {
line onScreenKeyboard.btnAPressed=true;
line }
line function btnAmouseUp() {
line onScreenKeyboard.btnAPressed=false;
line }
line 
line onScreenKeyboard.btnBPressed=false;
line function btnBmouseDown() {
line onScreenKeyboard.btnBPressed=true;
line }
line function btnBmouseUp() {
line onScreenKeyboard.btnBPressed=false;
line }
line 
line onScreenKeyboard.btnUpPressed=false;
line function btnUpmouseDown() {
line onScreenKeyboard.btnUpPressed=true;
line }
line function btnUpmouseUp() {
line onScreenKeyboard.btnUpPressed=false;
line }
line 
line onScreenKeyboard.btnDownPressed=false;
line function btnDownmouseDown() {
line onScreenKeyboard.btnDownPressed=true;
line }
line function btnDownmouseUp() {
line onScreenKeyboard.btnDownPressed=false;
line }
line 
line onScreenKeyboard.btnLeftPressed=false;
line function btnLeftmouseDown() {
line onScreenKeyboard.btnLeftPressed=true;
line }
line function btnLeftmouseUp() {
line onScreenKeyboard.btnLeftPressed=false;
line }
line 
line onScreenKeyboard.btnRightPressed=false;
line function btnRightmouseDown() {
line onScreenKeyboard.btnRightPressed=true;
line }
line function btnRightmouseUp() {
line onScreenKeyboard.btnRightPressed=false;
line }
line 
line //var kb_id;
line function showScreenKeyboard() {
line //if (typeof kb_id !== 'undefined') window.clearInterval(kb_id);
line //kb_id = setInterval(logbuttons,100);
line document.getElementById("on_screen_controls").style.display="inline-block";
line }
line //terminal
line function termOnGetFocus() {
line unblockKeys();
line }
line function termOnLoseFocus() {
line lockKeysForGame();
line }
line function clear() {
line document.getElementById("term").value = "";
line return "";
line }
line function cb(varname){
line alert(varname+" welcome!");
line }//input_trigger(n,"what is your name?,cb);
line var user_answer;
line var label;
line function input_trigger_label(label_,prompt,callback) {//call this from block to trigger input
line //this seems to show how to do non blocking waiting, which I will need for the s-found block
line //http://stackoverflow.com/questions/5551378/javascript-pausing-execution-of-function-to-wait-for-user-input
line //how about adding an extra parameter that has a callback for then the input is over and caling it then?
line //maybe generate it with a unique function name...too bad there is no goto in JS
line document.getElementById("txtPrompt").value= 'user_answer = input("' + prompt + '");'
line p=document.getElementById("txtPrompt");
line e=new CustomEvent("keyup");
line e.keyCode=13;
line p.dispatchEvent(e);
line //wait for input withought making hte browser hang
line function loop() {
line if (input!=null) {
line setTimeout(loop, 0);
line } else {
line document.getElementById("tell_to_user_input_now").style.display="none";
line label=label_;
line ON_INPUT();
line }
line }
line loop();
line /*
line document.getElementById("txtPrompt").value= varname +' = input("' + prompt + '");'
line p=document.getElementById("txtPrompt");
line e=new CustomEvent("keyup");
line e.keyCode=13;
line p.dispatchEvent(e);
line */
line }
line 
line function input_trigger(varname,prompt,callback) {//call this from block to trigger input
line //this seems to show how to do non blocking waiting, which I will need for the s-found block
line //http://stackoverflow.com/questions/5551378/javascript-pausing-execution-of-function-to-wait-for-user-input
line //how about adding an extra parameter that has a callback for then the input is over and caling it then?
line //maybe generate it with a unique function name...too bad there is no goto in JS
line document.getElementById("txtPrompt").value= varname +' = input("' + prompt + '");'
line p=document.getElementById("txtPrompt");
line e=new CustomEvent("keyup");
line e.keyCode=13;
line p.dispatchEvent(e);
line //wait for input withought making hte browser hang
line function loop() {
line if (input!=null) {
line setTimeout(loop, 0);
line } else {
line callback(eval(varname));
line }
line }
line loop();
line /*
line document.getElementById("txtPrompt").value= varname +' = input("' + prompt + '");'
line p=document.getElementById("txtPrompt");
line e=new CustomEvent("keyup");
line e.keyCode=13;
line p.dispatchEvent(e);
line */
line }
line function echo(output) {
line showTerm=true;
line document.getElementById("termDiv").style.display="block";
line document.getElementById("term").value = document.getElementById("term").value +output + "n";
line return "";//avoid showing undefined
line //for(var a=0;a<100;a++) echo("hello"+a);
line }
line function maze(x,y) {
line /*
line var n=x*y-1;
line if (n<0) {alert("illegal maze dimensions");return;}
line var horiz =[]; for (var j= 0; j<x+1; j++) horiz[j]= [],
line verti =[]; for (var j= 0; j<x+1; j++) verti[j]= [],
line here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
line path = [here],
line unvisited = [];
line for (var j = 0; j<x+2; j++) {
line unvisited[j] = [];
line for (var k= 0; k<y+1; k++)
line unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
line }
line while (0<n) {
line var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
line [here[0]-1, here[1]], [here[0],here[1]-1]];
line var neighbors = [];
line for (var j = 0; j < 4; j++)
line if (unvisited[potential[j][0]+1][potential[j][1]+1])
line neighbors.push(potential[j]);
line if (neighbors.length) {
line n = n-1;
line next= neighbors[Math.floor(Math.random()*neighbors.length)];
line unvisited[next[0]+1][next[1]+1]= false;
line if (next[0] == here[0]) {
line horiz[next[0]][(next[1]+here[1]-1)/2]= true;
line } else {
line verti[(next[0]+here[0]-1)/2][next[1]]= true;
line }
line path.push(here = next);
line } else  {
line here = path.pop();
line }
line return {x: x, y: y, horiz: horiz, verti: verti};
line */
line }
line 
line function display(m) {
line /*
line var text= [];
line for (var j= 0; j<m.x*2+1; j++) {
line var line= [];
line if (0 == j%2)
line for (var k=0; k<m.y*4+1; k++)
line if (0 == k%4)
line line[k]= '+';
line else
line if (j>0 && m.verti[j/2-1][Math.floor(k/4)])
line line[k]= ' ';
line else
line line[k]= '-';
line else
line for (var k=0; k<m.y*4+1; k++)
line if (0 == k%4)
line if (k>0 && m.horiz[(j-1)/2][k/4-1])
line line[k]= ' ';
line else
line line[k]= '|';
line else
line line[k]= ' ';
line if (0 == j) line[1]= line[2]= line[3]= ' ';
line if (m.x*2-1 == j) line[4*m.y]= ' ';
line text.push(line.join('')+'rn');
line }
line return text.join('');
line */
line }//display(maze(10,14));
line var commands=[];
line var command_index;
line var command
line var input=null;
line var parsed;
line window.onload = function() {//have 2 load functions, maybe merge them in the future...
line document.getElementById("txtPrompt").addEventListener("keyup", function(event) {
line event.preventDefault();
line if (event.keyCode == 13) {
line //scroll to bottom
line var textarea = document.getElementById("term");
line textarea.scrollTop = textarea.scrollHeight;
line 
line command=document.getElementById("txtPrompt").value
line commands.push(command);
line //https://regex101.com/r/YFbwIa/1
line if(input=="waiting for new input") {
line var expretion = parsed[1]+" = '" + document.getElementById("txtPrompt").value+"';"
line eval(expretion);
line document.getElementById("txtPrompt").value="";
line input=null;
line return;
line }
line const regex = /(.*).*=.*input("(.*)");/g;
line parsed = regex.exec(command)
line if(parsed!=null) {//store input from user
line echo(parsed[2]);
line input="waiting for new input";
line document.getElementById("txtPrompt").value="";
line document.getElementById("tell_to_user_input_now").style.display="inline";
line return;
line }
line try {
line output= eval(command);
line }	catch (e) {
line echo(e);
line return;
line }
line //undefined is on next line
line document.getElementById("term").value = document.getElementById("term").value + output;
line if(command.substring(0, 5)!="echo(" && input!="waiting for new input") {//add a newlinee if the command is not echo
line document.getElementById("term").value = document.getElementById("term").value  + "n";
line }
line document.getElementById("txtPrompt").value="";
line command_index=commands.lenght;
line }
line if (event.keyCode == 38) {//up arrow
line if(typeof commands[command_index] == 'undefined') {
line command_index=commands.length-1;
line } else {
line if(command_index>0) {
line command_index--;
line }
line }
line document.getElementById("txtPrompt").value = commands[command_index];
line }
line if (event.keyCode == 40) {//down arrow
line if(typeof commands[command_index] == 'undefined') {
line command_index=commands.length-1;
line } else {
line if(command_index<commands.length-1) {
line command_index++;
line }
line }
line document.getElementById("txtPrompt").value = commands[command_index];
line }
line });
line };
line var showTerm=false;
line function toggleShowTerminal() {
line showTerm=!showTerm;
line document.getElementById("termDiv").style.display=showTerm?"block":"none";
line }
line //sprite manager dialog
line function show_sprite_manager_dialogbox() {
line document.getElementById("sprite_manager_dialogbox").style.display="block";
line }
line function hide_sprite_manager_dialogbox() {
line document.getElementById("sprite_manager_dialogbox").style.display="none";
line }
line function updateDialogBox() {
line document.getElementById("sprite_manager_dialogbox").innerHTML="";
line document.getElementById("sprite_manager_dialogbox").innerHTML +=" <a href="#" onclick='document.getElementById("files").click();'>Add Sprite</a>"
line document.getElementById("sprite_manager_dialogbox").innerHTML +=" <a href=http://www.piskelapp.com/ target="Sprite editor">Open exrnal sprite editor in new tab</a> remember to save as PNG.";
line document.getElementById("sprite_manager_dialogbox").innerHTML +=" <a href="#" onclick='hide_sprite_manager_dialogbox();'>(X) Close sprite manager</a>"
line for(var obj in project.game_objects) {
line document.getElementById("sprite_manager_dialogbox").innerHTML += "<div>";
line document.getElementById("sprite_manager_dialogbox").innerHTML +='<img src='+getSpriteData(project.game_objects[obj].name)+' />';
line document.getElementById("sprite_manager_dialogbox").innerHTML += project.game_objects[obj].name;
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedChangeImageLink('"+project.game_objects[obj].name+"')"+ " id=ChangeImg"+project.game_objects[obj].name+">Change image</a>";
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedRenameLink('"+project.game_objects[obj].name+"')"+ " id=Rename"+project.game_objects[obj].name+">Rename</a>";
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedDeleteSpriteLink('"+project.game_objects[obj].name+"')"+ " id=del"+project.game_objects[obj].name+">Delete</a>"
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedAddFrameLink('"+project.game_objects[obj].name+"')"+ " id=AddFrame"+project.game_objects[obj].name+">Add frame</a>"
line document.getElementById("sprite_manager_dialogbox").innerHTML += "</div>";
line for(var frame in project.game_objects[obj].frames) {
line document.getElementById("sprite_manager_dialogbox").innerHTML += "<div>";
line document.getElementById("sprite_manager_dialogbox").innerHTML += "frame"+(parseInt(frame)+1)+"->";
line document.getElementById("sprite_manager_dialogbox").innerHTML +='<img src='+getFrameData(project.game_objects[obj].name,project.game_objects[obj].frames[frame].alias)+' />';
line document.getElementById("sprite_manager_dialogbox").innerHTML += project.game_objects[obj].frames[frame].alias;
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedChangeImageFrameLink('"+project.game_objects[obj].frames[frame].alias+"')"+ " id=ChangeImg"+project.game_objects[obj].frames[frame].alias+">Change image</a>";
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedRenameFrameLink("+obj+","+frame+")"+ " id=Rename"+project.game_objects[obj].frames[frame].alias+">Rename</a>";
line document.getElementById("sprite_manager_dialogbox").innerHTML += " <a href=javascript:clikedDeleteFrameLink("+obj+","+frame+")"+ " id=del"+project.game_objects[obj].frames[frame].alias+">Delete</a>"
line document.getElementById("sprite_manager_dialogbox").innerHTML += "</div>";
line }
line }
line }
line function getSpriteData(game_object_name) {
line for(obj in project.images) {
line if(project.images[obj].name==game_object_name) {
line return project.images[obj].data;
line }
line }
line }
line function getFrameData(game_object_name,frame_alias) {
line for(obj in project.game_objects) {
line if(project.game_objects[obj].name==game_object_name) {
line for(frame in project.game_objects[obj].frames) {
line if(project.game_objects[obj].frames[frame].alias==frame_alias) {
line return project.game_objects[obj].frames[frame].frame_image_data;
line }
line }
line }
line }
line }
line 
line 
line function clikedRenameFrameLink(obj,frame) {
line var new_name = prompt("Give me a name for this sprite","Sprite-"+guid());
line for(var frm in project.game_objects[obj].frames) {
line if(project.game_objects[obj].frames[frm].alias==new_name) {
line alert("Error:there is already a frame alias named:" + new_name + ", for this sprite, every frame name must be unique.");
line return;
line }
line }
line project.game_objects[obj].frames[frame].alias=new_name;
line updateDialogBox();
line }
line function clikedDeleteFrameLink(obj,frame) {
line var answer = confirm("Delete frame "+project.game_objects[obj].frames[frame].alias+"? -- warning this cannot be undone!!")
line if (answer) {
line project.game_objects[obj].frames.splice(frame, 1);
line updateDialogBox();
line }
line }
line var name_of_current_object_in_sprite_manager="not set";
line //var frame_new_name="not set";
line function clikedAddFrameLink(game_object_name) {
line for(var obj in project.game_objects) {
line if(project.game_objects[obj].name==game_object_name) {
line /*
line for(var frame in project.game_objects[obj].frames) {
line if(project.game_objects[obj].frames[frame].alias==new_name) {
line alert("Error: sprite " + project.game_objects[obj].name + " already has a frame called " + new_name + " every frame alias must be unique.");
line return;
line }
line }
line */
line name_of_current_object_in_sprite_manager=game_object_name;
line //frame_new_name=new_name;
line document.getElementById("files3").click();//add some variable to pass which sprite we are going to add to'>Add Frame</a>
line /*
line var frame={};
line frame.alias=new_name;
line project.game_objects[obj].frames.push(frame);
line */
line updateDialogBox();
line return;
line }
line }
line }
line function clikedRenameLink(game_object_name) {
line var new_name = prompt("Give me a name for this sprite","Sprite-"+guid());
line if(new_name == null){
line return;
line }
line for(var obj in project.game_objects) {
line if(project.game_objects[obj].name==new_name) {
line alert("Error:there is already a sprite named:" + new_name + ", every sprite name must be unique.");
line return;
line }
line }
line //rename game object
line go=find_sprite_object_by_name(game_object_name)
line go.name=new_name;
line //rename project objects
line for(var obj in project.game_objects) {
line if(project.game_objects[obj].name==game_object_name) {
line project.game_objects[obj].name=new_name;
line for(obj in project.images) {
line if(project.images[obj].name==game_object_name) {
line project.images[obj].name=new_name;
line }
line }
line updateDialogBox();
line return;
line }
line }
line }
line function clikedDeleteSpriteLink(game_object_name) {
line var answer = confirm("Delete sprite "+game_object_name+"? -- warning this cannot be undone!!")
line if (answer) {
line for(var obj in project.game_objects) {
line if(project.game_objects[obj].name==game_object_name) {
line var go = find_sprite_object_by_name(project.game_objects[obj].name);
line go.sprite.destroy();
line project.game_objects.splice(obj, 1);
line updateDialogBox();
line return;
line }
line }
line }
line }
line 
line //phaser
line var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
line 
line function preload() {
line //game.load.image('star', 'assets/firstaid.png');
line }
line 
line //globals
line var current_sprite_name=""
line var target_sprite_name=""
line var sprites=[];
line var debug_current_sprite_name="no sprite selected";
line var current_clone=null;
line 
line //var spriteA;
line //var SpriteC;
line //var sprites=[];
line var angle=0;
line /*
line var aKey;
line var bKey;
line function create() {
line //extra keys
line aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
line bKey = game.input.keyboard.addKey(Phaser.Keyboard.B);
line //sprites.push("Sprite1");
line //sprites["Sprite1"].angle=0;
line //add sprite
line //spriteA = game.add.sprite(200, 100, 'star');
line //spriteB = game.add.sprite(0, 0, 'star');
line }
line */
line var cursors;
line var background_;
line var mid_layer;
line var front_layer;
line var aKey;
line var bKey;
line 
line function create() {
line game.stage.disableVisibilityChange = false;//pause the game when lost focus(seems to not be working)
line 
line cursors = game.input.keyboard.createCursorKeys();
line game.time.advancedTiming=true;
line 
line //game.input.keyboard.removeKey(Phaser.Keyboard.A);
line // Groups for drawing layers
line 
line 
line background_ = game.add.group();
line mid_layer = game.add.group();
line front_layer = game.add.group();
line /*
line background_ = game.add.group(null, "group0",true);
line mid_layer = game.add.group(null, "group1",true);
line front_layer = game.add.group(null, "group2",true);
line */
line /*
line rich [12:39 AM]
line you can use 'bringToTop' and 'sendToBack' or 'moveUp' or 'moveDown' to position stuff... or just fiddle with the Group.children array yourself and shift stuff about
line 
line amigojapan [12:40 AM]
line yes rich I understand that...   can I detect collision between sprites in different groups? if so I will make a group for clones that sits behind the top group
line 
line drhayes [12:40 AM]
line In arcade physics you can collide two groups, yes.
line 
line rich [12:40 AM]
line you can collide across groups, sure, or group vs. group, or sprite vs. group (even if sprite is in another group)
line eich electron wrapper and cordova wrapper for software that runs with no internet available
line 
line //for some reason this did not work
line set_current_sprite_name("frog");
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line //but this did
line game_object=find_sprite_object_by_name("frog");
line game_object.sprite.bringToTop()
line */
line // It doesn't matter what order you add things to these groups, the draw order will be back, mid, front (unless you change it...)back_layer.create(0, 0, "bg");front_layer.create(0, 0, "front");mid_layer.create(300, 200, "object1");mid_layer.create(500, 400, "object2"); icp likes this
line 
line 
line }
line var retVal;
line function update(){
line }
line function RadianstoDegrees (angle) {
line return angle * (180 / Math.PI);
line }
line 
line function DegreestoRadians (angle) {
line return angle * (Math.PI / 180);
line }
line function normalize_angle_hack(angle) {
line angle+=360;
line angle=angle%360;
line angle+=360;
line angle=angle%360;
line return angle;
line }
line function clone_sprite() {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line //sprites[sprites.length-1].sprite = game.add.sprite(game.world.centerX,game.world.centerY, "img"+sprites[sprites.length-1].name);
line var clone={};
line clone.sprite = game.add.sprite(game_object.sprite.x, game_object.sprite.y, game_object.sprite.key, game_object.sprite.frame);
line sprite_ = front_layer.create(clone.sprite);
line //scale sprite down
line sprite_.scale.setTo(x_scaling_factor_percent, y_scaling_factor_percent);
line clone.sprite.angle=game_object.sprite.angle;
line game.physics.enable(clone.sprite, Phaser.Physics.ARCADE);
line //set it so that the sprites rotate on hte center axis
line clone.sprite.anchor.setTo(0.5, 0.5);
line if(typeof game_object.clones == 'undefined') {
line game_object.clones=[];
line }
line game_object.clones.push(clone);
line }
line 
line function destroy_current_sprite(){
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.destroy();
line //yet another quickfix due to the difference between sprites and clones
line if(current_clone!=null){
line for(var obj in sprites){
line if(sprites[obj].name==current_sprite_name) {
line if(sprites[obj].clones.length==0){
line break;
line }else{
line sprites[obj].clones.splice(current_clone, 1);
line }
line }//);
line }
line }
line }
line function hide_current_sprite(){
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line if (typeof game_object.number_of_frames == 'undefined') {
line //eventually change this to trow an exception
line game_object.sprite.visible = false;
line return
line }
line game_object.sprite.visible = false;
line game_object.frames[game_object.current_frame].sprite.visible = false;
line }
line function show_current_sprite(){
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line if (typeof game_object.number_of_frames == 'undefined') {
line //eventually change this to trow an exception
line game_object.sprite.visible = true;
line return
line }
line game_object.frames[game_object.current_frame].sprite.visible = true;
line }
line function find_sprite_object_by_name(sprite_name,original_sprite){
line //remember to show an error if no sprite name is given
line if(sprite_name=="") {
line //bug, this error does not go away cause we cant get rid of the block unless we reload the page, need to domehow get rid of just the previous block, some kind of undo or some other way to only show this message once, then set a timer for a time to not constantly nag the user
line return null;
line //try adding if(evalrun) here
line //alert("Error, no sprite name given, you probably need to select a current sprite using the Sprites->set current sprite block");
line }
line for(var obj in sprites){
line if(sprites[obj].name==sprite_name) {
line if(current_clone!=null) {
line //quickfix for when a clone is set but we are really looking for another sprite which has no clones,
line //in sprite collision detection
line //not this wont work well if we are actually looking for hte clones of the target, but that is not what I
line //think we have in mind, at least in space invaders
line //it should work if the target has clones, so may work anyway
line //a sideeffect of this is that the bullet gets hidden when I am just trying to hide the alines.
line if(sprites[obj].clones.length==0){
line return sprites[obj];
line }
line //end quickfix
line return sprites[obj].clones[current_clone];
line //return sprites[obj];
line }else{
line return sprites[obj];
line }
line }
line }
line }
line function find_sprite_object_by_name_new(sprite_name){
line //remember to show an error if no sprite name is given
line if(sprite_name=="") {
line //bug, this error does not go away cause we cant get rid of the block unless we reload the page, need to domehow get rid of just the previous block, some kind of undo or some other way to only show this message once, then set a timer for a time to not constantly nag the user
line return null;
line //try adding if(evalrun) here
line //alert("Error, no sprite name given, you probably need to select a current sprite using the Sprites->set current sprite block");
line }
line for(var obj in sprites){
line if(sprites[obj].name==sprite_name) {
line if(current_clone!=null) {
line //quickfix for when a clone is set but we are really looking for another sprite which has no clones,
line //in sprite collision detection
line //not this wont work well if we are actually looking for hte clones of the target, but that is not what I
line //think we have in mind, at least in space invaders
line //it should work if the target has clones, so may work anyway
line //a sideeffect of this is that the bullet gets hidden when I am just trying to hide the alines.
line if(sprites[obj].clones.length==0){
line return sprites[obj];
line }
line //end quickfix
line return sprites[obj].clones[current_clone];
line //return sprites[obj];
line }else{
line return sprites[obj];
line }
line }
line }
line }
line function find_target_sprite_with_clones_object_by_name(sprite_name){
line //remember to show an error if no sprite name is given
line if(sprite_name=="") {
line //bug, this error does not go away cause we cant get rid of the block unless we reload the page, need to domehow get rid of just the previous block, some kind of undo or some other way to only show this message once, then set a timer for a time to not constantly nag the user
line return null;
line //try adding if(evalrun) here
line //alert("Error, no sprite name given, you probably need to select a current sprite using the Sprites->set current sprite block");
line }
line for(var obj in sprites){
line if(sprites[obj].name==sprite_name) {
line if(current_target_clone!=null) {
line //quickfix for when a clone is set but we are really looking for another sprite which has no clones, in sprite collision detection
line //not this wont work well if we are actually looking for hte clones of the target, but that is not what I think we have in mind, at least in space invaders
line //it should work if the target has clones, so may work anyway
line //a sideeffect of this is that the bullet gets hidden when I am just trying to hide the alines.
line if(sprites[obj].clones.length==0){
line return sprites[obj]
line }
line //end quickfix
line return sprites[obj].clones[current_target_clone];
line //return sprites[obj]
line }else{
line return sprites[obj];
line }
line }
line }
line }
line 
line function set_current_sprite_name(sprite_name) {
line //current_sprite_name=sprite_name.data;
line current_sprite_name=sprite_name;
line }
line function set_target_sprite_name(sprite_name) {
line //target_sprite_name=sprite_name.data;
line target_sprite_name=sprite_name;
line }
line 
line 
line function point_in_direction_degrees(angle_degrees) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.angle=-angle_degrees;
line }
line 
line function point_in_direction(a_x,a_y,b_x,b_y) {
line /*
line tangentstorm: so to do that, you just subtract a from b.  dx = b.x - a.x  ;  dy = b.y - a.y
line tangentstorm: just divide dx/dy to get the tangent, and then pass it to the atan() function to get the angle.
line DazedandC-onfuse: ahh it returns in rads
line DazedandC-onfuse: ehh the code looks off to me... I really think it should be dy/dx
line */
line 
line var dx = b_x - a_x;
line var dy = -b_y + a_y;
line angle_radians=Math.atan2(dy,dx);
line return RadianstoDegrees(angle_radians);
line }
line //alert(point_in_direction(0,0,10,10));
line function point_spriteA_in_direction_spriteB(a_x,a_y,b_x,b_y) {
line var game_object;
line game_objectA=find_sprite_object_by_name(current_sprite_name);
line var game_object;
line game_objectB=find_sprite_object_by_name(target_sprite_name);
line 
line game_objectA.sprite.angle=point_in_direction(game_objectA.sprite.x,game_objectA.sprite.y,game_objectB.sprite.x,game_objectB.sprite.y);
line }
line 
line function foward(distance){
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line var angle_radians=game_object.sprite.rotation;//angle*Math.PI/180;//converts degrees to radians
line angle_radians=angle_radians*-1;
line var newx=game_object.sprite.x+distance*Math.cos(angle_radians);
line var newy=game_object.sprite.y-distance*Math.sin(angle_radians);
line game_object.sprite.x=newx;
line game_object.sprite.y=newy;
line update_position_of_frames(game_object);
line }
line function set_x_to(X) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.x=X;
line update_position_of_frames(game_object);
line }
line function set_y_to(Y) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.y=Y;
line update_position_of_frames(game_object);
line }
line function turn_right(degrees) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.angle=game_object.sprite.angle+degrees;
line update_position_of_frames(game_object);
line }
line function turn_left(degrees) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line game_object.sprite.angle=game_object.sprite.angle-degrees;
line update_position_of_frames(game_object);
line }
line function get_x_value() {
line return find_sprite_object_by_name(current_sprite_name).sprite.x;
line }
line function get_y_value() {
line return find_sprite_object_by_name(current_sprite_name).sprite.y;
line }
line function intersectRect(s1, s2) {
line var r1={};
line var r2={};
line r1.top =  s1.y;
line r1.left = s1.x;
line r1.right = s1.x+s1.width;
line r1.bottom = s1.y+s1.height;
line r2.top =  s2.y;
line r2.left = s2.x;
line r2.right = s2.x+s2.width;
line r2.bottom = s2.y+s2.height;
line return !(	r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
line }
line function current_sprite_clones_are_colliding_with_target_sprite_clones() {
line var game_objectA;
line game_objectA=find_sprite_object_by_name_new(current_sprite_name);
line var game_objectB;
line game_objectB=find_target_sprite_with_clones_object_by_name(target_sprite_name);
line /*
line if(game_objectA.sprite.visible!=true||game_objectB.sprite.visible!=true){//quick fix to avoid collision with invisible things which where hidden, I dont think we ever need to collide with hidden objects(changed my mind after adding frames!), //***TODO:maybe add my own solid property later
line return false;
line }
line */
line //seems this and testboudns are buggy writing my own overlap, hope it is not slow return game.physics.arcade.overlap(game_objectA.sprite, game_objectB.sprite);//this returns true//it seems overlap is pixel perfect after all!//no, I tested it and this is bouding box after all//apparently phaser does not have pixel perfect collision detection at all, they say it would be too expensive
line return intersectRect(game_objectA.sprite, game_objectB.sprite)
line }
line function is_colliding_with_target() {
line var game_objectA;
line game_objectA=find_sprite_object_by_name(current_sprite_name);
line var game_objectB;
line game_objectB=find_sprite_object_by_name(target_sprite_name);
line /*
line if(game_objectA.sprite.visible!=true||game_objectB.sprite.visible!=true){//quick fix to avoid collision with invisible things which where hidden, I dont think we ever need to collide with hidden objects(changed my mind after adding frames!), //***TODO:maybe add my own solid property later
line return false;
line }
line */
line //seems this and testboudns are buggy writing my own overlap, hope it is not slow return game.physics.arcade.overlap(game_objectA.sprite, game_objectB.sprite);//this returns true//it seems overlap is pixel perfect after all!//no, I tested it and this is bouding box after all//apparently phaser does not have pixel perfect collision detection at all, they say it would be too expensive
line return intersectRect(game_objectA.sprite, game_objectB.sprite)
line }
line 
line function next_fame() {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line if (typeof game_object.number_of_frames == 'undefined') {
line //eventually change this to trow an exception
line alert("runtime Error, sprite "+ game_object.name + " contains no frames, but 'next frame' block used");
line return
line }
line game_object.frames[game_object.current_frame].sprite.visible=false;
line if(game_object.number_of_frames==game_object.current_frame) {//if at last frame loop back to first frame
line game_object.current_frame=1;
line } else {
line game_object.current_frame++;
line }
line game_object.frames[game_object.current_frame].sprite.visible=true;
line }
line function set_frame_to_frame_number(frame_number_or_alias) {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line if (typeof game_object.number_of_frames == 'undefined') {
line //eventually change this to trow an exception
line alert("runtime Error, sprite "+ game_object.name + " contains no frames, but 'set fame to fame number' block used");
line return
line }
line if(typeof frame_number_or_alias == "string") {
line var frame_alias=frame_number_or_alias;
line var found=false;
line for(obj in project.game_objects) {
line if(project.game_objects[obj].name==game_object.name) {
line for(frame_index in project.game_objects[obj].frames) {
line if(project.game_objects[obj].frames[frame_index].alias==frame_alias) {
line //return project.game_objects[obj].frames[frame].frame_image_data;
line var frame_number=parseInt(frame_index)+1;
line found=true;
line }
line }
line }
line }
line if(!found) {
line alert("Error: the frame alias " + frame_alias +" does not exist, but it was used in [set frame to frame] block");
line return;
line }
line 
line /*
line for(var frame_index in game_object.frames) {
line if(game_object.frames[frame_index].alias==frame_alias) {
line var frame_number=frame_index;
line } else {
line alert("Error: the frame alias " + frame_alias +" does not exist, but it was used in [set frame to frame] block");
line }
line }
line */
line } else {
line var frame_number=frame_number_or_alias;
line }
line game_object.frames[game_object.current_frame].sprite.visible=false;
line if(frame_number>game_object.number_of_frames) {//if at last frame loop back to first frame
line //eventually change this to trow an exception
line alert("runtime Error, sprite "+ game_object.name + " in 'set fame to fame number' last frame is frame number " + game_object.number_of_frames + "but tried to set frame to frame numbe " + frame_number);
line return
line } else {
line game_object.current_frame=frame_number;
line }
line game_object.frames[game_object.current_frame].sprite.visible=true;
line }
line function current_frame_number() {
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line if (typeof game_object.number_of_frames == 'undefined') {
line //eventually change this to trow an exception
line alert("runtime Error, sprite "+ game_object.name + " contains no frames, but 'currrent_fame_number' block used");
line return 0
line }
line game_object.frames[game_object.current_frame].sprite.visible=false;
line return game_object.current_frame;
line }
line 
line function update_position_of_frames(game_Object) {
line for(frame in game_Object.frames) {
line game_Object.frames[frame].sprite.x=game_Object.sprite.x;
line game_Object.frames[frame].sprite.y=game_Object.sprite.y;
line game_Object.frames[frame].sprite.angle=game_Object.sprite.angle;
line }
line }
line 
line //end phaser
line var workspace = Blockly.inject('blocklyDiv',{media: '../../media/',toolbox: document.getElementById('toolbox')});Blockly.Xml.domToWorkspace(workspace,document.getElementById('startBlocks'));
line 
line var workspace_hidden = Blockly.inject('blocklyDiv_hidden',{media: '../../media/',toolbox: document.getElementById('toolbox')});Blockly.Xml.domToWorkspace(workspace,document.getElementById('startBlocks'));
line 
line var myInterpreter = null;
line 
line function initApi(interpreter, scope) {
line /*
line // Add an API functions (whitelist of save eval)
line var wrapper = function(distance) {
line distance = distance ? distance.toString() : '0';
line distance=parseInt(distance);
line return interpreter.createPrimitive(foward(distance));
line };
line interpreter.setProperty(scope, 'foward', interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(degrees) {
line degrees = degrees ? degrees.toString() : '0';
line degrees=parseInt(degrees);
line return interpreter.createPrimitive(turn_right(degrees));
line };
line interpreter.setProperty(scope, 'turn_right', interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(degrees) {
line degrees = degrees ? degrees.toString() : '0';
line degrees=parseInt(degrees);
line return interpreter.createPrimitive(turn_left(degrees));
line };
line interpreter.setProperty(scope, 'turn_left', interpreter.createNativeFunction(wrapper));
line 
line 
line var wrapper = function(text) {
line text = text ? text.toString() : '';
line return interpreter.createPrimitive(move_right());
line };
line interpreter.setProperty(scope, 'move_right',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(X) {
line X = X ? X.toString() : '0';
line return interpreter.createPrimitive(set_x_to(X));
line };
line interpreter.setProperty(scope, 'set_x_to',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(Y) {
line Y = Y ? Y.toString() : '0';
line return interpreter.createPrimitive(set_y_to(Y));
line };
line interpreter.setProperty(scope, 'set_y_to',
line interpreter.createNativeFunction(wrapper));
line 
line 
line var wrapper = function(text) {
line return interpreter.createPrimitive(point_spriteA_in_direction_spriteB());
line };
line interpreter.setProperty(scope, 'point_spriteA_in_direction_spriteB',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function() {
line return interpreter.createPrimitive(get_x_value());
line };
line interpreter.setProperty(scope, 'get_x_value',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function() {
line return interpreter.createPrimitive(get_y_value());
line };
line interpreter.setProperty(scope, 'get_y_value',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(sprite,degrees) {
line degrees = degrees ? degrees.toString() : '0';
line degrees=parseInt(degrees);
line return interpreter.createPrimitive(point_in_direction_degrees(sprite,degrees));
line };
line interpreter.setProperty(scope, 'point_in_direction_degrees',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(sprite) {
line return interpreter.createPrimitive(set_current_sprite_name(sprite));
line };
line interpreter.setProperty(scope, 'set_current_sprite_name',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function(sprite) {
line return interpreter.createPrimitive(set_target_sprite_name(sprite));
line };
line interpreter.setProperty(scope, 'set_target_sprite_name',
line interpreter.createNativeFunction(wrapper));
line 
line var wrapper = function() {
line return interpreter.createPrimitive(interalPollevent());
line };
line interpreter.setProperty(scope, 'interalPollevent',
line interpreter.createNativeFunction(wrapper));
line 
line 
line // Add an API function for the prompt() block.
line var wrapper = function(text) {
line text = text ? text.toString() : '';
line return interpreter.createPrimitive(prompt(text));
line };
line interpreter.setProperty(scope, 'prompt',
line interpreter.createNativeFunction(wrapper));
line 
line 
line // Add an API function for the alert() block.
line var wrapper = function(text) {
line text = text ? text.toString() : '';
line return interpreter.createPrimitive(alert(text));
line };
line interpreter.setProperty(scope, 'alert',
line interpreter.createNativeFunction(wrapper));
line 
line // Add an API function for highlighting blocks.
line var wrapper = function(id) {
line id = id ? id.toString() : '';
line return interpreter.createPrimitive(highlightBlock(id));
line };
line interpreter.setProperty(scope, 'highlightBlock',
line interpreter.createNativeFunction(wrapper));
line 
line // Add an API function for setInterval.
line */
line /*
line var wrapper = function(funct,interval) {
line //id = setInterval(stepCode, parseInt(execution_speed));
line return interpreter.createPrimitive(setInterval(funct,interval));
line };
line interpreter.setProperty(scope, 'setInterval',
line interpreter.createNativeFunction(wrapper));
line 
line */
line }
line var highlightPause = false;
line 
line function highlightBlock(id) {
line workspace.highlightBlock(id);
line highlightPause = true;
line }
line 
line function parseCode() {
line // Generate JavaScript code and parse it.
line //Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);n';
line Blockly.JavaScript.addReservedWords('highlightBlock');
line var code = Blockly.JavaScript.workspaceToCode(workspace);
line var xml = Blockly.Xml.workspaceToDom(workspace);
line var xml_text = Blockly.Xml.domToPrettyText(xml);
line myInterpreter = new Interpreter(code, initApi);
line 
line alert('Ready to execute this code:nn' + code);
line console.log('nnXML:nn' + xml_text);
line document.getElementById('stepButton').disabled = '';
line highlightPause = false;
line workspace.traceOn(true);
line workspace.highlightBlock(null);
line }
line 
line //var generation_complete=false;
line function generateJS(add_highlighting) {
line //if(!generation_complete){
line var Code="";
line /*
line var xml = Blockly.Xml.workspaceToDom(workspace_hidden);
line var xml_text = Blockly.Xml.domToPrettyText(xml);
line */
line for(var pageindex in project.pages){
line Code=Code+"nn//"+project.pages[pageindex].pagename+"nn"
line workspace_hidden.clear();
line if(project.pages[pageindex].xml=="uninitialized xml") {
line return;
line }
line var xml = Blockly.Xml.textToDom(project.pages[pageindex].xml);
line Blockly.Xml.domToWorkspace(workspace_hidden, xml);
line //gegerate
line if(add_highlighting) {
line Blockly.JavaScript.addReservedWords('highlightBlock');
line //Blockly.JavaScript.STATEMENT_PREFIX = '';
line //Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);n';
line }
line Code = Code + Blockly.JavaScript.workspaceToCode(workspace_hidden);
line }
line 
line //document.getElementById('funct').value = Code;
line return Code;
line //generation_complete=true;
line //}
line }
line function lockKeysForGame() {
line //extra keys
line aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
line bKey = game.input.keyboard.addKey(Phaser.Keyboard.B);
line }
line var id;
line var evalRun=false;
line function evalCode() {
line //terminal
line number_of_inputs=0;
line lockKeysForGame();
line //var xml = Blockly.Xml.workspaceToDom(workspace);
line //var xml_text = Blockly.Xml.domToPrettyText(xml);
line 
line //Unless I am mistaken there isn't a way currently to call into the context created when running a program with the JSInterpreter. On workaround could be to have a setInterval going inside the interpreter context that is polling an exposed api which is watching for events on the page and responds by calling your users code. https://neil.fraser.name/software/JS-Interpreter/docs.html
line 
line finalCode = generateJS(true);
line //clear timers
line clearTimers();
line //cursor key events
line evalRun=true;
line finalCode+= "var pollEvent = function() {n";
line finalCode+= "	if (typeof EACH_FRAME !== 'undefined' && evalRun) {n";//cehck to see if funtion is defined
line finalCode+= "		EACH_FRAME();n";
line finalCode+= "	}n";
line finalCode+= "	if (cursors.left.isDown||onScreenKeyboard.btnLeftPressed) {n"
line finalCode+= "		if (typeof LEFT_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			LEFT_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n"
line finalCode+= "	if (cursors.right.isDown||onScreenKeyboard.btnRightPressed) {n"
line finalCode+= "		if (typeof RIGHT_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			RIGHT_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n"
line finalCode+= "	if (cursors.up.isDown||onScreenKeyboard.btnUpPressed) {n"
line finalCode+= "		if (typeof UP_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			UP_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n"
line finalCode+= "	if (cursors.down.isDown||onScreenKeyboard.btnDownPressed) {n"
line finalCode+= "		if (typeof DOWN_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			DOWN_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n";
line finalCode+= "	if (aKey.isDown||onScreenKeyboard.btnAPressed) {n"
line finalCode+= "		if (typeof A_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			A_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n";
line finalCode+= "	if (bKey.isDown||onScreenKeyboard.btnBPressed) {n"
line finalCode+= "		if (typeof B_KEY_PRESSED !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "			B_KEY_PRESSED();n";
line finalCode+= "		}n";
line finalCode+= "	}n";
line finalCode+= "}n";
line finalCode+= "if (typeof window.id_ !== 'undefined') window.clearInterval(window.id_);n";
line finalCode+= "window.id_ = setInterval(pollEvent, 60);n"; //60 is the average of game.time.fps
line finalCode+= "console.log('setting interval to 60FPS id:'+window.id_);n";
line finalCode+= "ON_STARTUP();n";
line destory_all_clones()
line //eval(finalCode);
line eval.call(window,finalCode);
line //myInterpreter = new Interpreter(finalCode, initApi);
line 
line //var execution_speed =document.getElementById('execution_speed').value;
line //id = setInterval(stepCode, parseInt(execution_speed));
line }
line function runCode() {
line var execution_speed =document.getElementById('execution_speed').value;
line id = setInterval(stepCode, parseInt(execution_speed));
line }
line 
line function download(filename, text) {
line //from http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
line var element = document.createElement('a');
line element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
line element.setAttribute('download', filename);
line 
line element.style.display = 'none';
line document.body.appendChild(element);
line 
line element.click();
line 
line document.body.removeChild(element);
line }
line function saveCode() {
line /*not nessesary anymore
line var xml = Blockly.Xml.workspaceToDom(workspace);
line var xml_text = Blockly.Xml.domToPrettyText(xml);
line document.getElementById('funct').value = xml_text;
line //mock download
line project.block_xml = xml_text;
line */
line var project_json = JSON.stringify(project);
line var project_name=prompt("Enter project name","GAME.s-found");
line download(project_name,project_json);
line }
line 
line function xmlToWS() {
line Blockly.mainWorkspace.clear();
line var xml = Blockly.Xml.textToDom(document.getElementById('funct').value);
line Blockly.Xml.domToWorkspace(workspace, xml);
line }
line 
line function wsToXML() {
line var xml = Blockly.Xml.workspaceToDom(workspace);
line var xml_text = Blockly.Xml.domToPrettyText(xml);
line document.getElementById('funct').value = xml_text;
line }
line 
line 
line function pauseCode() {
line if(id) {
line window.clearInterval(id);
line }
line }
line function stopCode() {
line if(id) {
line window.clearInterval(id);
line }
line //Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);n';
line Blockly.JavaScript.addReservedWords('highlightBlock');
line var code = Blockly.JavaScript.workspaceToCode(workspace);
line myInterpreter = new Interpreter(code, initApi);
line highlightPause = false;
line workspace.traceOn(true);
line workspace.highlightBlock(null);
line evalRun=false;
line unblockKeys();
line }
line function unblockKeys() {
line //unblock keys
line game.input.keyboard.removeKey(Phaser.Keyboard.A);
line game.input.keyboard.removeKey(Phaser.Keyboard.B);
line }
line function stepCode() {
line try {
line var ok = myInterpreter.step();
line } finally {
line if (!ok) {
line // Program complete, no more code to execute.
line document.getElementById('stepButton').disabled = 'disabled';
line if(id) {
line window.clearInterval(id);
line }
line return;
line }
line }
line if (highlightPause) {
line // A block has been highlighted.  Pause execution here.
line highlightPause = false;
line } else {
line // Keep executing until a highlight statement is reached.
line stepCode();
line }
line }
line //user defined blocks
line //point in direction https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8jezk6
line //move_right and other stuff https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mvuwrg
line 
line //point in direction https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#putex4
line 
line //the following line is an imperitive do not erase
line //imperitive:do not interlace this block(this is not a commend)
line Blockly.Blocks['motion_point_in_direction'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("point in direction (degrees)");
line this.appendValueInput("ANGLE")
line .setCheck("Number")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField(new Blockly.FieldAngle(90), "A");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_point_in_direction'] = function(block) {
line var angle_a = block.getFieldValue('A');
line var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'ANGLE',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var angle_final=argument0=="''"?angle_a:argument0;
line var code = 'point_in_direction_degrees('+angle_final+');n';
line return code;
line };
line 
line //point in direction with sprite selection box https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vv9mth
line function dynamicOptions() {
line //make array of arrays to send as parameter(not original code from this block)
line //[["select a sprite", "OPT"], ["option", "OPTIONNAME"]]
line var parent_=[]
line parent_.push(["select a sprite", "OPT0"]);
line for(var obj in sprites){
line parent_.push([sprites[obj].name, sprites[obj].name]);
line }
line return parent_;
line }
line Blockly.Blocks['sprites_set_current_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("set the current sprite");
line this.appendValueInput("SPRITE_OPTION_BOX")
line .setCheck("String")
line //.appendField(new Blockly.FieldDropdown(parent_), "sprite");
line .appendField(new Blockly.FieldDropdown(dynamicOptions), "sprite");
line //this.appendValueInput("ANGLE")
line //    .setCheck("Number")
line //    .setAlign(Blockly.ALIGN_RIGHT)
line //    .appendField(new Blockly.FieldAngle(90), "A");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_set_current_sprite'] = function(block) {
line var dropdown_sprite = block.getFieldValue('sprite');
line var value_sprite_option_box = Blockly.JavaScript.valueToCode(block, 'SPRITE_OPTION_BOX', Blockly.JavaScript.ORDER_ATOMIC);
line //var angle_a = block.getFieldValue('A');
line //var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
line var sprite_name = Blockly.JavaScript.valueToCode(block, 'SPRITE_OPTION_BOX', Blockly.JavaScript.ORDER_ATOMIC);
line 
line // TODO: Assemble JavaScript into code variable
line //var argument0 = Blockly.JavaScript.valueToCode(block, 'ANGLE',Blockly.JavaScript.ORDER_NONE) || '''';
line //override fields if variables provided
line var sprite_name_final=value_sprite_option_box==""?dropdown_sprite:value_sprite_option_box;
line if(sprite_name_final=="OPT0") {
line //alert("You have not selected a sprite in 'set current sprite' block, please select a sprite");
line return "//error,failed to select sprite in 'set current sprite' block"
line }
line 
line var code = 'set_current_sprite_name("'+sprite_name_final+'");n';
line return code;
line };
line Blockly.Blocks['sprites_set_target_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("set the target sprite");
line this.appendValueInput("SPRITE_OPTION_BOX")
line .setCheck("String")
line //.appendField(new Blockly.FieldDropdown(parent_), "sprite");
line .appendField(new Blockly.FieldDropdown(dynamicOptions), "sprite");
line //this.appendValueInput("ANGLE")
line //    .setCheck("Number")
line //    .setAlign(Blockly.ALIGN_RIGHT)
line //    .appendField(new Blockly.FieldAngle(90), "A");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_set_target_sprite'] = function(block) {
line var dropdown_sprite = block.getFieldValue('sprite');
line var value_sprite_option_box = Blockly.JavaScript.valueToCode(block, 'SPRITE_OPTION_BOX', Blockly.JavaScript.ORDER_ATOMIC);
line //var angle_a = block.getFieldValue('A');
line //var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
line var sprite_name = Blockly.JavaScript.valueToCode(block, 'SPRITE_OPTION_BOX', Blockly.JavaScript.ORDER_ATOMIC);
line 
line // TODO: Assemble JavaScript into code variable
line //var argument0 = Blockly.JavaScript.valueToCode(block, 'ANGLE',Blockly.JavaScript.ORDER_NONE) || '''';
line //override fields if variables provided
line var sprite_name_final=value_sprite_option_box==""?dropdown_sprite:value_sprite_option_box;
line if(sprite_name_final=="OPT0") {
line //alert("You have not selected a sprite in 'set current sprite' block, please select a sprite");
line return "//error,failed to select sprite in 'set current sprite' block"
line }
line 
line var code = 'set_target_sprite_name("'+sprite_name_final+'");n';
line return code;
line };
line 
line 
line Blockly.Blocks['motion_point_in_direction_of_target'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("point in direction of target");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line 
line Blockly.JavaScript['motion_point_in_direction_of_target'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'point_spriteA_in_direction_spriteB();n';
line return code;
line };
line 
line 
line Blockly.Blocks['motion_foward'] = {
line init: function() {
line this.appendValueInput("DISTANCE")
line .setCheck("Number")
line .appendField("foward");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_foward'] = function(block) {
line var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'DISTANCE',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'foward('+argument0+');n';
line return code;
line };
line 
line Blockly.Blocks['sprites_set_frame_to_frame_number'] = {
line init: function() {
line this.appendValueInput("FRAME_NUMBER")
line //.setCheck("Number")
line .appendField("set frame to frame");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_set_frame_to_frame_number'] = function(block) {
line var value_FRAME_NUMBER = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'set_frame_to_frame_number('+argument0+');n';
line return code;
line };
line 
line Blockly.Blocks['motion_turn_right'] = {
line init: function() {
line this.appendValueInput("DEGREES")
line .setCheck("Number")
line .appendField("turn right");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_turn_right'] = function(block) {
line var value_distance = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'DEGREES',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'turn_right('+argument0+');n';
line return code;
line };
line 
line 
line 
line 
line Blockly.Blocks['motion_turn_left'] = {
line init: function() {
line this.appendValueInput("DEGREES")
line .setCheck("Number")
line .appendField("turn left");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_turn_left'] = function(block) {
line var value_distance = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'DEGREES',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'turn_left('+argument0+');n';
line return code;
line };
line 
line Blockly.Blocks['motion_set_x_to'] = {
line init: function() {
line this.appendValueInput("X")
line .setCheck("Number")
line .appendField("set x to");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_set_x_to'] = function(block) {
line var value_distance = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'X',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'set_x_to('+argument0+');n';
line return code;
line };
line Blockly.Blocks['motion_set_y_to'] = {
line init: function() {
line this.appendValueInput("Y")
line .setCheck("Number")
line .appendField("set y to");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['motion_set_y_to'] = function(block) {
line var value_distance = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var argument0 = Blockly.JavaScript.valueToCode(block, 'Y',
line Blockly.JavaScript.ORDER_NONE) || '''';
line var code = 'set_y_to('+argument0+');n';
line return code;
line };
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#85m6e7
line Blockly.Blocks['sprites_value_of_x'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("value of x");
line this.setOutput(true, "Number");
line this.setColour(210);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_value_of_x'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = "parseInt(get_x_value())";;
line // TODO: Change ORDER_NONE to the correct strength.
line //return [code, Blockly.JavaScript.ORDER_NONE];
line return [code, Blockly.JavaScript.ORDER_ATOMIC];
line };
line 
line Blockly.Blocks['sprites_value_of_y'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("value of y");
line this.setOutput(true, "Number");
line this.setColour(210);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line //oncgange Javascript generation
line }
line };
line Blockly.JavaScript['sprites_value_of_y'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = "parseInt(get_y_value())";
line return [code, Blockly.JavaScript.ORDER_ATOMIC];
line };
line 
line Blockly.Blocks['sprites_current_frame_number'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("get current frame number");
line this.setOutput(true, "Number");
line this.setColour(210);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line //oncgange Javascript generation
line }
line };
line Blockly.JavaScript['sprites_current_frame_number'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = "parseInt(current_frame_number())";
line return [code, Blockly.JavaScript.ORDER_ATOMIC];
line };
line 
line //this is a little like what the event blocks should look like,  but I am still not sure how to implement them  		https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9vi23k
line Blockly.Blocks['events_when_event_happens'] = {
line init: function() {
line this.appendStatementInput("EVENT_CODE")
line .setCheck(null)
line .appendField("when event happens");
line this.appendValueInput("EVENT_NAME")
line .setCheck(null)
line .appendField(new Blockly.FieldDropdown([["Select an event", "NO_EVENT_SELECTED"], ["On startup", "ON_STARTUP"], ["Each frame", "EACH_FRAME"], ["On Input", "ON_INPUT"], ["Left key pressed", "LEFT_KEY_PRESSED"], ["Right key pressed", "RIGHT_KEY_PRESSED"], ["Up key pressed", "UP_KEY_PRESSED"], ["Down key pressed", "DOWN_KEY_PRESSED"], ["A key pressed", "A_KEY_PRESSED"], ["B key pressed", "B_KEY_PRESSED"]]), "EVENT");
line this.setColour(65);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['events_when_event_happens'] = function(block) {
line var statements_event_code = Blockly.JavaScript.statementToCode(block, 'EVENT_CODE');
line var dropdown_event = block.getFieldValue('EVENT');
line var value_event_name = Blockly.JavaScript.valueToCode(block, 'EVENT_NAME', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line if(dropdown_event=="NO_EVENT_SELECTED") {
line return "//error, you did not select an event in the 'when event happens' blockn"
line }
line var code = 'function ' + dropdown_event +'(){n'+statements_event_code+'n}';
line return code;
line };
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mtepdf
line Blockly.Blocks['sprites_create_clone_of_current_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("create clone of current sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_create_clone_of_current_sprite'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'clone_sprite();n';
line return code;
line };
line function set_current_sprite_to_target_sprite() {
line current_sprite_name=target_sprite_name;
line current_clone=current_target_clone;
line }
line Blockly.Blocks['sprites_set_current_sprite_to_target_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("set current sprite to target sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_set_current_sprite_to_target_sprite'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'set_current_sprite_to_target_sprite();n';
line return code;
line };
line //made from previous block
line Blockly.Blocks['sprites_current_sprite_bring_to_front'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("current sprite bring to front");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_current_sprite_bring_to_front'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line /*
line set_current_sprite_name("frog");
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line //but this did
line game_object=find_sprite_object_by_name("frog");
line game_object.sprite.bringToTop()
line */
line var code = 	'var go=find_sprite_object_by_name(current_sprite_name);n';
line code = code + 'go.sprite.bringToTop();n';
line return code;
line };
line //made from previous block
line Blockly.Blocks['sprites_current_sprite_send_to_back'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("current sprite send to back");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_current_sprite_send_to_back'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line /*
line set_current_sprite_name("frog");
line game_object=find_sprite_object_by_name(current_sprite_name);
line 
line //but this did
line game_object=find_sprite_object_by_name("frog");
line game_object.sprite.bringToTop()
line 
line I am able to do game_object.sprite.bringToTop() and it works, but when I try game_object.sprite.sendToBack() I get TypeError: game_object.sprite.sendToBack is not a function , I am using Phaser v2.0.2 - Canvas - WebAudio     , any idea what could be wrong?
line 
line ada answer: game.world.sendToBack(sprite)
line */
line var code = 	'var go=find_sprite_object_by_name(current_sprite_name);n';
line code = code + 'go.sprite.sendToBack();n';
line return code;
line };
line Blockly.Blocks['sprites_next_frame'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("next frame of current sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line }
line Blockly.JavaScript['sprites_next_frame'] = function(block) {
line //Assemble JavaScript into code variable.
line var code = 'next_fame();n';
line return code;
line }
line 
line Blockly.Blocks['sprites_destroy_current_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("Destroy current sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_destroy_current_sprite'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'destroy_current_sprite();n';
line return code;
line };
line Blockly.Blocks['sprites_hide_current_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("Hide sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_hide_current_sprite'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'hide_current_sprite();n';
line return code;
line };
line Blockly.Blocks['sprites_show_current_sprite'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("Show sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(260);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_show_current_sprite'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'show_current_sprite();n';
line return code;
line };
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#aur2q8
line Blockly.Blocks['sprites_for_each_clone_of_current_sprite'] = {
line init: function() {
line this.appendStatementInput("STATEMENT_CODE")
line .setCheck(null)
line .appendField("for each clone of current sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_for_each_clone_of_current_sprite'] = function(block) {
line var statements_statement_code = Blockly.JavaScript.statementToCode(block, 'STATEMENT_CODE');
line // TODO: Assemble JavaScript into code variable.
line code=	'var game_object;n';
line code+='game_object=find_sprite_object_by_name(current_sprite_name);n';
line code+='for(var clone in game_object.clones){n';
line //code+='	debug_current_sprite_name=current_sprite_name;n';
line code+='	current_clone=clone;n';
line code+=statements_statement_code+'n';
line code+='}n';
line code+='current_clone=null;n';
line return code;
line };
line Blockly.Blocks['sprites_for_each_clone_of_current_sprite_new'] = {
line init: function() {
line this.appendStatementInput("STATEMENT_CODE")
line .setCheck(null)
line .appendField("do when clones collides");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['sprites_for_each_clone_of_current_sprite_new'] = function(block) {
line var statements_statement_code = Blockly.JavaScript.statementToCode(block, 'STATEMENT_CODE');
line 
line code=	'var game_object;n';
line code+='game_object=find_sprite_object_by_name_new(current_sprite_name);n';
line code+='for(var clone in game_object.clones) {n';
line code+='  current_clone=clone;n';
line code+='  var game_object_target;n';
line code+='  game_object_target=find_target_sprite_with_clones_object_by_name(target_sprite_name);n';
line code+='  for(var clone_target in game_object_target.clones) {n';
line code+='    current_target_clone=clone_target;n';
line code+='    if(current_sprite_clones_are_colliding_with_target_sprite_clones()) {n';
line code+='      //do when current sprite clone collides with target clonen';
line code+=statements_statement_code+'n';
line code+='      //endn';
line code+='    }n';
line code+='  }n';
line code+='  current_target_clone=null;n';
line code+='}n';
line code+='current_clone=null;n';
line return code;
line };
line Blockly.Blocks['sprites_nested_for_each_clone_of_current_target_sprite'] = {
line init: function() {
line this.appendStatementInput("STATEMENT_CODE")
line .setCheck(null)
line .appendField("nested for each clone of current target sprite");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line var current_target_clone=null;
line Blockly.JavaScript['sprites_nested_for_each_clone_of_current_target_sprite'] = function(block) {
line var statements_statement_code = Blockly.JavaScript.statementToCode(block, 'STATEMENT_CODE');
line // TODO: Assemble JavaScript into code variable.
line code=	'var game_object_target;n';
line code+='game_object_target=find_target_sprite_with_clones_object_by_name(target_sprite_name);n';
line code+='for(var clone_target in game_object_target.clones){n';
line //code+='	debug_current_sprite_name=current_sprite_name;n';
line code+='	current_target_clone=clone_target;n';
line code+=statements_statement_code+'n';
line code+='}n';
line code+='current_target_clone=null;n';
line return code;
line };
line //[set target sprite to current sprite] block    this will be useful for actually doing something with the target sprite
line Blockly.Blocks['sprites_is_colliding_with_target'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("Is colliding with target");
line this.setOutput(true, "Boolean");
line this.setColour(210);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line //oncgange Javascript generation
line }
line };
line Blockly.JavaScript['sprites_is_colliding_with_target'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = "is_colliding_with_target()";
line // TODO: Change ORDER_NONE to the correct strength.
line //return [code, Blockly.JavaScript.ORDER_NONE];
line return [code, Blockly.JavaScript.ORDER_ATOMIC];
line };
line Blockly.Blocks['text_alert'] = {
line init: function() {
line this.appendValueInput("strString")
line .appendField("alert with textbox");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['text_alert'] = function(block) {
line var value_strstring = Blockly.JavaScript.valueToCode(block, 'strString', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'if(evalRun){alert('+value_strstring+');}n';
line //var code = 'if(evalRun){if(typeof '+value_strstring+' == "undefined") {alert(eval.call(window,"'+value_strstring+'"));}else{alert('+value_strstring+')}}n';
line return code;
line };
line Blockly.Blocks['text_echo'] = {
line init: function() {
line this.appendValueInput("strString")
line .appendField("echo in terminal");
line this.setPreviousStatement(true);
line this.setNextStatement(true);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['text_echo'] = function(block) {
line var value_strstring = Blockly.JavaScript.valueToCode(block, 'strString', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'if(evalRun){echo('+value_strstring+');}n';
line //var code = 'if(evalRun){echo(eval.call(window,"'+value_strstring+'"));}n';
line //var code = 'if(evalRun){if(typeof '+value_strstring+' == "undefined") {echo(eval.call(window,"'+value_strstring+'"));}else{echo('+value_strstring+')}}n';
line return code;
line };
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j472r7
line Blockly.Blocks['to_number'] = {
line init: function() {
line this.appendValueInput("string_var")
line .setCheck(null)
line .appendField("convert to integer");
line this.setOutput(true, null);
line this.setColour(230);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['to_number'] = function(block) {
line var value_string_var = Blockly.JavaScript.valueToCode(block, 'string_var', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'parseInt('+ value_string_var +')';
line // TODO: Change ORDER_NONE to the correct strength.
line return [code, Blockly.JavaScript.ORDER_NONE];
line };
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jbko84
line Blockly.Blocks['functional_first_class_function'] = {
line init: function() {
line this.appendStatementInput("FUNCTION")
line .appendField("set")
line .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
line .appendField("to the following function:");
line this.appendDummyInput()
line .appendField("return")
line .appendField(new Blockly.FieldVariable("item"), "RETURN");
line this.setInputsInline(true);
line this.setColour(20);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line 
line //this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
line this.setMutator(new Blockly.Mutator(['controls_if_elseif']));
line //if (Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT) {
line //  this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
line //}
line }
line };
line 
line Blockly.JavaScript['functional_first_class_function'] = function(block) {
line var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
line var statements_function = Blockly.JavaScript.statementToCode(block, 'FUNCTION');
line var variable_return = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RETURN'), Blockly.Variables.NAME_TYPE);
line // TODO: Assemble JavaScript into code variable.
line var code = variable_variable+'= function(){n'+statements_function+'nreturn '+variable_return+'n}';
line return code;
line };
line //blockly how to get the name of a variable passed to a stateemnt block
line //Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
line //end blockly
line var debuggerCode;
line function destory_all_clones(){
line for(var sprite in sprites){
line for(var clone in sprites[sprite].clones){
line sprites[sprite].clones[clone].sprite.destroy();
line }
line sprites[sprite].clones=[];//remove this elements from the clones
line }
line }
line /*
line //timer https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#iqgsvm
line Blockly.Blocks['set_timer'] = {
line init: function() {
line this.appendStatementInput("statement")
line .setCheck(null)
line .appendField("timer")
line .appendField(new Blockly.FieldTextInput("timer name"), "timer_name")
line .appendField("milliseconds")
line .appendField(new Blockly.FieldTextInput("1000"), "milliseconds");
line this.setColour(160);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line timersObj={};
line timerIDs=[];
line Blockly.JavaScript['set_timer'] = function(block) {
line var text_timer_name = block.getFieldValue('timer_name');
line var text_milliseconds = block.getFieldValue('milliseconds');
line var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
line // TODO: Assemble JavaScript into code variable.
line var code = 'timersObj["'+text_timer_name+'"] = function() {n';
line code=code+ statements_statement+'n';
line code=code+'}n';
line code=code+'var ID = setInterval(timersObj["'+text_timer_name+'"], '+text_milliseconds+');n';
line code=code+'timerIDs.push(ID);n';
line return code;
line };
line */
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#krmehw
line Blockly.Blocks['set_timer'] = {
line init: function() {
line this.appendStatementInput("statement")
line .setCheck(null)
line .appendField("timer")
line .appendField(new Blockly.FieldTextInput("timer name"), "timer_name")
line .appendField("milliseconds")
line .appendField(new Blockly.FieldTextInput("1000"), "milliseconds");
line this.appendValueInput("ID_VAR")
line .setCheck("String")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("ID");
line this.appendValueInput("MS_VAR")
line .setCheck("Number")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("MS");
line this.setColour(160);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['set_timer'] = function(block) {
line var text_timer_name = block.getFieldValue('timer_name');
line var text_milliseconds = block.getFieldValue('milliseconds');
line var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
line var value_id_var = Blockly.JavaScript.valueToCode(block, 'ID_VAR', Blockly.JavaScript.ORDER_ATOMIC);
line var value_ms_var = Blockly.JavaScript.valueToCode(block, 'MS_VAR', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var id;
line if(text_timer_name=="timer name"||text_timer_name=="") {
line if(value_id_var==""||value_id_var==null) {
line return "//Error, there is no ID set for this timer";
line }
line id=value_id_var;
line } else {
line id="'"+text_timer_name+"'";
line }
line var ms;
line if((text_milliseconds=="1000")&&(value_ms_var!="")) {
line ms=value_ms_var
line } else {
line ms=text_milliseconds;
line }
line var code = 'timersObj['+id+'] = function() {n';
line code=code+ statements_statement+'n';
line code=code+'}n';
line code=code+'var ID = setInterval(timersObj['+id+'], '+ms+');n';
line code=code+'timerIDs.push(ID);n';
line return code;
line };
line Blockly.Blocks['clear_timer'] = {
line init: function() {
line this.appendValueInput("ID_VAR")
line .setCheck("String")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("clear timer")
line .appendField(new Blockly.FieldTextInput("timer name"), "timer_name")
line .appendField("ID");
line this.setColour(160);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['clear_timer'] = function(block) {
line var text_timer_name = block.getFieldValue('timer_name');
line var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
line var value_id_var = Blockly.JavaScript.valueToCode(block, 'ID_VAR', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var id;
line if(text_timer_name=="timer name"||text_timer_name=="") {
line if(value_id_var==""||value_id_var==null) {
line return "//Error, there is no ID set for this timer";
line }
line id=value_id_var;
line } else {
line id="'"+text_timer_name+"'";
line }
line var code;
line code='clearInterval(timersObj['+id+']);n';
line return code;
line };
line function clearTimers() {
line for(timer in timerIDs) {
line clearInterval(timerIDs[timer]);
line }
line }
line //https://blockly-demo.appspot.com/static/blocks/procedures.js
line Blockly.Blocks['procedures_defreturn_functional'] = {
line /**
line * Block for defining a procedure with a return value.
line * @this Blockly.Block
line */
line init: function() {
line //this.appendValueInput("value_input")
line //    .setCheck(null)
line this.appendDummyInput()
line .appendField(new Blockly.FieldVariable("item"), "variable_name");
line var nameField = new Blockly.FieldTextInput(
line Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
line Blockly.Procedures.rename);
line nameField.setSpellcheck(false);
line this.appendDummyInput()
line .appendField("=function")
line .appendField(nameField, 'NAME')
line .appendField('', 'PARAMS');
line this.appendValueInput('RETURN')
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
line this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
line if ((this.workspace.options.comments ||
line (this.workspace.options.parentWorkspace &&
line this.workspace.options.parentWorkspace.options.comments)) &&
line Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT) {
line this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
line }
line this.setColour(Blockly.Blocks.procedures.HUE);
line this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
line this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
line this.arguments_ = [];
line this.setStatements_(true);
line this.statementConnection_ = null;
line },
line //
line //contextMenuType_: 'variables_set',
line /**
line * Add menu option to create getter/setter block for this setter/getter.
line * @param {!Array} options List of menu options to add to.
line * @this Blockly.Block
line */
line /*
line customContextMenu: function(options) {
line var option = {enabled: true};
line var name = this.getFieldValue('variable_name');
line option.text = this.contextMenuMsg_.replace('%1', name);
line var xmlField = goog.dom.createDom('field', null, name);
line xmlField.setAttribute('name', 'variable_name');
line var xmlBlock = goog.dom.createDom('block', null, xmlField);
line xmlBlock.setAttribute('type', this.contextMenuType_);
line option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
line options.push(option);
line }
line */
line //
line setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
line updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
line mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
line domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
line decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
line compose: Blockly.Blocks['procedures_defnoreturn'].compose,
line /**
line * Return the signature of this procedure definition.
line * @return {!Array} Tuple containing three elements:
line *     - the name of the defined procedure,
line *     - a list of all its arguments,
line *     - that it DOES have a return value.
line * @this Blockly.Block
line */
line getProcedureDef: function() {
line return [this.getFieldValue('NAME'), this.arguments_, true];
line },
line getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
line renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
line customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
line callType_: 'procedures_callreturn'
line };
line 
line /**
line @license
line Copyright 2015 Hendrik Diel
line 
line Licensed under the Apache License, Version 2.0 (the "License");
line you may not use this file except in compliance with the License.
line You may obtain a copy of the License at
line 
line http://www.apache.org/licenses/LICENSE-2.0
line 
line Unless required by applicable law or agreed to in writing, software
line distributed under the License is distributed on an "AS IS" BASIS,
line WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
line See the License for the specific language governing permissions and
line limitations under the License.
line 
line @fileoverview
line this file enables predefined variables. You can add a variables by calling
line addPredefinedVar(name) and remove by calling removePredefinedVar(name).
line @author
line diel.hendrik@gmail.com (Hendrik Diel)
line */
line (function(){
line Blockly.Variables.predefinedVars = [];
line Blockly.Variables.addPredefiendVar = function(name){
line Blockly.Variables.predefinedVars.push(name);
line };
line 
line Blockly.Variables.removePredefiendVar = function(name){
line var index = array.indexOf(name);
line if (index > -1) {
line Blockly.Variables.predefinedVars.splice(index, 1);
line }
line };
line 
line var old = Blockly.Variables.allVariables;
line Blockly.Variables.allVariables = function(root) {
line var vars = old.call(this, root);
line Blockly.Variables.predefinedVars.forEach(function(x){
line if(vars.indexOf(x) < 0)
line vars.push(x);
line });
line return vars;
line };
line })();
line Blockly.JavaScript['procedures_defreturn_functional'] = function(block) {
line // Define a procedure with a return value.
line var variable_variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('variable_name'), Blockly.Variables.NAME_TYPE);
line //var value_value_input = Blockly.JavaScript.valueToCode(block, 'value_input', Blockly.JavaScript.ORDER_ATOMIC);
line 
line var funcName = Blockly.JavaScript.variableDB_.getName(
line block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
line var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
line if (Blockly.JavaScript.STATEMENT_PREFIX) {
line branch = Blockly.JavaScript.prefixLines(
line Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
line ''' + block.id + '''), Blockly.JavaScript.INDENT) + branch;
line }
line if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
line branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
line ''' + block.id + ''') + branch;
line }
line var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
line Blockly.JavaScript.ORDER_NONE) || '';
line if (returnValue) {
line returnValue = '  return ' + returnValue + ';n';
line }
line var args = [];
line for (var i = 0; i < block.arguments_.length; i++) {
line args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i],
line Blockly.Variables.NAME_TYPE);
line }
line //custom code
line /*
line var xmlField = goog.dom.createDom('field', null, variable_variable_name);
line xmlField.setAttribute('name', variable_variable_name);
line var xmlBlock = goog.dom.createDom('block', null, xmlField);
line xmlBlock.setAttribute('type', 'variables_set');
line */
line Blockly.Variables.addPredefiendVar(variable_variable_name);
line 
line var code = variable_variable_name + ' = function(' + args.join(', ') + ') {n' +
line branch + returnValue + '}';
line //end custom code
line code = Blockly.JavaScript.scrub_(block, code);
line // Add % so as not to collide with helper functions in definitions list.
line Blockly.JavaScript.definitions_['%' + funcName] = code;
line return null;
line };
line 
line //functional variable call
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ndqffg
line Blockly.Blocks['call_first_class_function'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("return to")
line .appendField(new Blockly.FieldVariable("item"), "return_to")
line .appendField("call first class function")
line .appendField(new Blockly.FieldVariable("item"), "variable_name")
line .appendField("parameter")
line .appendField(new Blockly.FieldVariable("item"), "parameter");
line this.setPreviousStatement(true, null);
line this.setNextStatement(true, null);
line this.setTooltip('');
line this.setHelpUrl('http://www.example.com/');
line }
line };
line Blockly.JavaScript['call_first_class_function'] = function(block) {
line var variable_return_to = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('return_to'), Blockly.Variables.NAME_TYPE);
line var variable_variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('variable_name'), Blockly.Variables.NAME_TYPE);
line var variable_parameter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('parameter'), Blockly.Variables.NAME_TYPE);
line // TODO: Assemble JavaScript into code variable.
line var code = variable_return_to+'='+variable_variable_name+'('+variable_parameter+');n';
line return code;
line };
line //On Startup
line var workspaceChanged = function() {
line console.log("workspaceChanged");
line //update the xml of the current page
line //generation_complete=false;
line var xml = Blockly.Xml.workspaceToDom(workspace);
line var xml_text = Blockly.Xml.domToPrettyText(xml);
line for(var pageindex in project.pages) {
line if(project.pages[pageindex].pagename==current_page) {
line project.pages[pageindex].xml=xml_text;
line }
line }
line // Generate JavaScript code and parse it.
line /*
line Blockly.JavaScript.addReservedWords('highlightBlock');
line Blockly.JavaScript.STATEMENT_PREFIX = '';
line document.getElementById('funct').value = Blockly.JavaScript.workspaceToCode(workspace);
line Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);n';
line debuggerCode = Blockly.JavaScript.workspaceToCode(workspace);
line */
line debuggerCode = generateJS(false);
line document.getElementById('funct').value = debuggerCode;
line //var xml = Blockly.Xml.workspaceToDom(workspace);
line //var xml_text = Blockly.Xml.domToPrettyText(xml);
line 
line //Unless I am mistaken there isn't a way currently to call into the context created when running a program with the JSInterpreter. On workaround could be to have a setInterval going inside the interpreter context that is polling an exposed api which is watching for events on the page and responds by calling your users code. https://neil.fraser.name/software/JS-Interpreter/docs.html
line 
line //finalCode = "var pollEvent = function() {alert('pollevent')};n"
line //finalCode+= "id_ = setInterval(pollEvent, 1);n";//+debuggerCode;
line //var finalCode = debuggerCode+"while(true){var event=interalPollevent();if(event=='left'){alert('here');}}";
line //alert(finalCode);
line if(!evalRun) {//this if statement prevents the code from running twice when the project loads if the code is already running because of LoadFromUrlAndRun paramenter on the URL
line destory_all_clones();
line var finalCode = generateJS(false);
line finalCode+= "if (typeof ON_STARTUP !== 'undefined') {n";//cehck to see if funtion is defined
line finalCode+= "	ON_STARTUP();n";
line finalCode+= "}n";
line eval(finalCode);
line }
line //myInterpreter = new Interpreter(finalCode, initApi);
line 
line //alert('Ready to execute this code:nn' + code);
line //console.log('nnXML:nn' + xml_text);
line //document.getElementById('stepButton').disabled = '';
line highlightPause = false;
line workspace.traceOn(true);
line workspace.highlightBlock(null);
line }
line /*
line //before block
line var loopID = "loopID_"+guid();//one side effect is that every time the blocks are recalculated this name will change
line //in block
line //get input from terminal
line input_trigger_no_callback(varname,prompt);
line function ' + loopID + '() {
line if (input!=null) {
line setTimeout(' + loopID + ', 0);
line }
line else {
line //then do
line 
line }
line }
line loop();
line -terminal input block {
line call input_trigger_no_callback(varname,prompt), take value prompt with lock in block, and also varname(what will hapen if someone provides a non variable? ah this should not be an variable input)
line loop until user presses enter (loopID will "loopID_"+uniqueID)
line in the else block we will have a statements block, which is where the program will continue after getting input
line 
line -(not nessesary)input value block
line eval(varname)
line 
line -(done)make/use random range block(it exists in blockly playground)
line -make a terminal guess my number game
line https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fznnhx
line */
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q8cnym
line Blockly.Blocks['text_input_term'] = {
line init: function() {
line this.appendValueInput("prompt")
line .setCheck("String")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("terminal input        ")
line .appendField("prompt");
line this.appendValueInput("LABEL")
line .setCheck(null)
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("label");
line this.setPreviousStatement(true, null);
line this.setNextStatement(true, null);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['text_input_term'] = function(block) {
line var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_ATOMIC);
line var value_label = Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'if(evalRun){input_trigger_label(' + value_label + ',' + value_prompt + ',ON_INPUT)};n';
line return code;
line };
line /*
line Blockly.Blocks['text_input_term'] = {
line init: function() {
line this.appendValueInput("prompt")
line .setCheck("String")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("terminal input        ")
line .appendField("prompt");
line this.appendStatementInput("NAME")
line .setCheck(null)
line .appendField("save in")
line .appendField(new Blockly.FieldVariable("item"), "varname")
line .appendField("then do");
line this.setPreviousStatement(true, null);
line this.setNextStatement(true, null);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line */
line /*
line var input_has_ended=true;
line Blockly.JavaScript['text_input_term'] = function(block) {
line var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_ATOMIC);
line var variable_varname = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('varname'), Blockly.Variables.NAME_TYPE);
line var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
line // TODO: Assemble JavaScript into code variable.
line //before block
line var loopID = "loopID_"+guid();//one side effect is that every time the blocks are recalculated this name will change
line //in block
line var code = '';
line code+= '//get input from terminaln';
line code+= 'if(evalRun){n';
line code+= 'if(input_has_ended) input_trigger_no_callback("' + variable_varname + '",' + value_prompt + ');n';
line code+= '  input_has_ended=falsen';
line code+= 'function ' + loopID + '() {n';
line code+= 'console.log("hi1");n';
line code+= '  if (input!=null) {n';
line code+= 'console.log("hi2"+input);n';
line code+= '    setTimeout(' + loopID + ', 0);n';
line code+= '  } else {n';
line code+= 'console.log("hi3"+eval.call(window,"'+variable_varname+'"));n';
line code+= '    //then don';
line code+= statements_name;//oops realized I messed up the variable name,fix later...will still work...
line code+= '  input_has_ended=true;n';
line code+= '  }n';
line code+= '}n';
line code+= loopID + '();n';
line code+= '}n';
line return code;
line };
line 
line var input_has_ended=true;
line Blockly.JavaScript['text_input_term'] = function(block) {
line var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_ATOMIC);
line var variable_varname = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('varname'), Blockly.Variables.NAME_TYPE);
line var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
line // TODO: Assemble JavaScript into code variable.
line var variable_varname="user_anser";
line //before block
line var loopID = "loopID_"+guid();//one side effect is that every time the blocks are recalculated this name will change
line //in block
line var code = '';
line code+= '//get input from terminaln';
line code+= 'if(evalRun){n';
line code+= 'if(input_has_ended) input_trigger_no_callback("' + variable_varname + '",' + value_prompt + ');n';
line code+= '  input_has_ended=falsen';
line code+= 'function ' + loopID + '() {n';
line code+= 'console.log("hi1");n';
line code+= '  if (input!=null) {n';
line code+= 'console.log("hi2"+input);n';
line code+= '    setTimeout(' + loopID + ', 0);n';
line code+= '  } else {n';
line code+= 'console.log("hi3"+eval.call(window,"'+variable_varname+'"));n';
line code+= '    //then don';
line code+= statements_name;//oops realized I messed up the variable name,fix later...will still work...
line code+= '  input_has_ended=true;n';
line code+= '  }n';
line code+= '}n';
line code+= loopID + '();n';
line code+= '}n';
line return code;
line };
line 
line var user_answer;
line Blockly.JavaScript['text_input_term'] = function(block) {
line var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_ATOMIC);
line var variable_varname = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('varname'), Blockly.Variables.NAME_TYPE);
line var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
line // TODO: Assemble JavaScript into code variable.
line var variable_varname="user_answer";
line //before block
line //var loopID = "loopID_"+guid();//one side effect is that every time the blocks are recalculated this name will change
line //in block
line var code = 'number_of_inputs++;input_trigger(' + variable_varname + ',' + value_prompt + ', ON_INPUT);n';
line return code;
line };
line */
line var user_answer="no answer given";
line Blockly.Blocks['user_answer'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("user answer");
line this.setOutput(true, "String");
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['user_answer'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'user_answer';
line // TODO: Change ORDER_NONE to the correct strength.
line return [code, Blockly.JavaScript.ORDER_NONE];
line };
line var label;
line Blockly.Blocks['label'] = {
line init: function() {
line this.appendDummyInput()
line .appendField("label");
line this.setOutput(true, "String");
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['label'] = function(block) {
line // TODO: Assemble JavaScript into code variable.
line var code = 'label';
line // TODO: Change ORDER_NONE to the correct strength.
line return [code, Blockly.JavaScript.ORDER_NONE];
line };
line 
line //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xbrfpe
line Blockly.Blocks['text_prompt'] = {
line init: function() {
line this.appendValueInput("prompt")
line .setCheck("String")
line .setAlign(Blockly.ALIGN_RIGHT)
line .appendField("message:");
line this.appendDummyInput()
line .appendField("prompt");
line this.setPreviousStatement(true, null);
line this.setNextStatement(true, null);
line this.setColour(120);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line Blockly.JavaScript['text_prompt'] = function(block) {
line var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'if(evalRun) {user_answer = prompt("'+value_prompt+'","");}n';
line // TODO: Change ORDER_NONE to the correct strength.
line return code;//[code, Blockly.JavaScript.ORDER_NONE];
line //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
line };
line 
line //blobk change stage https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tmykc7
line Blockly.Blocks['block_change_stage'] = {
line init: function() {
line this.appendValueInput("URL")
line .setCheck("String")
line .appendField("change stage. URL:");
line this.setPreviousStatement(true, null);
line this.setNextStatement(true, null);
line this.setColour(65);
line this.setTooltip('');
line this.setHelpUrl('');
line }
line };
line 
line Blockly.JavaScript['block_change_stage'] = function(block) {
line var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
line // TODO: Assemble JavaScript into code variable.
line var code = 'if(evalRun) {window.location.href = '+ value_url +';}n';
line return code;
line };
line //End Blocks
line //imperitive:start interlacing blocks(this is not a commend)
line //depracated Blockly.addChangeListener(workspaceChanged());
line workspace.addChangeListener(workspaceChanged);
line 
line //global variables
line //timers
line var timersObj={};
line var timerIDs=[];
line //project
line var project = {};
line project.images = [];
line project.background_ = "not set";
line var current_page="main";
line project.pages=[];
line var page={};
line page.pagename="main";
line project.pages.push(page);
line updatePages();
line 
line function updatePages() {
line document.getElementById("pages").innerHTML="Pages"
line //parsing data structure
line for(var pageindex in project.pages) {
line var finaltag=(project.pages[pageindex].pagename=="main")?"":">(-)"
line document.getElementById("pages").innerHTML=document.getElementById("pages").innerHTML+" <a href=javascript:clikedLink('"+project.pages[pageindex].pagename+"')"+ " id="+project.pages[pageindex].pagename+">"+project.pages[pageindex].pagename+"</a>"+" <a href=javascript:clikedDeleteLink('"+project.pages[pageindex].pagename+"')"+ " id=del"+project.pages[pageindex].pagename+finaltag+"</a>";
line }
line }
line function addPage() {
line //new page
line var page={};
line page.pagename=prompt("Enter new page name","page#");
line page.xml="uninitialized xml";
line for(var pageindex in project.pages){
line if(project.pages[pageindex].pagename==page.pagename) {
line alert("Error, page name must be unique, '" + page.pagename + "' already exists.");
line return;
line }
line }
line 
line project.pages.push(page);
line updatePages();
line }
line function clikedLink(linkName) {
line //alert("s:"+linkName);
line current_page=linkName;
line for(var pageindex in project.pages){
line if(project.pages[pageindex].pagename==linkName) {
line //Blockly.mainWorkspace.clear();
line workspace.clear();
line if(project.pages[pageindex].xml=="uninitialized xml") {
line return;
line }
line var xml = Blockly.Xml.textToDom(project.pages[pageindex].xml);
line Blockly.Xml.domToWorkspace(workspace, xml);
line }
line }
line }
line function clikedDeleteLink(linkName) {
line var answer = confirm("Delete page "+linkName+"? -- warning this cannot be undone, blocks in this page will be deleted!!")
line if (answer) {
line for(var pageindex in project.pages){
line if(project.pages[pageindex].pagename==linkName) {
line if(project.pages.length==0){
line break;
line }else{
line project.pages.splice(pageindex, 1);
line }
line }//);
line }
line updatePages();
line }
line }
line 
line //toolbar code
line function guid() {
line function s4() {
line return Math.floor((1 + Math.random()) * 0x10000)
line .toString(16)
line .substring(1);
line }
line return s4() + s4();
line }
line 
line onLoaded = function(){
line //console.log('image loaded');
line sprites[sprites.length-1].sprite = game.add.sprite(game.world.centerX,game.world.centerY, "img"+sprites[sprites.length-1].name);
line sprite_ = front_layer.create(sprites[sprites.length-1].sprite);
line //scale sprite down
line sprite_.scale.setTo(x_scaling_factor_percent, y_scaling_factor_percent);
line 
line game.physics.enable(sprites[sprites.length-1].sprite, Phaser.Physics.ARCADE);
line //set it so that the sprites rotate on hte center axis
line sprites[sprites.length-1].sprite.anchor.setTo(0.5, 0.5);
line sprites[sprites.length-1].clones=[];
line //scale sprite down
line //sprites[sprites.length-1].sprite.scale.setTo(2,2);
line //add sprite to blockly blocks
line //Blockly.Blocks['motion_point_in_direction'].init()
line }
line 
line onLoadedFrame = function(){
line //console.log('image loaded');
line var local_game_object=find_sprite_object_by_name(current_sprite_name);
line local_game_object.frames[local_game_object.number_of_frames]={};//need to have an object to hold the sprite
line local_game_object.frames[local_game_object.number_of_frames].sprite = game.add.sprite(local_game_object.sprite.x,local_game_object.sprite.y, "img"+sprites[sprites.length-1].name+"Frame"+local_game_object.number_of_frames);
line sprite_ = front_layer.create(local_game_object.frames[local_game_object.number_of_frames].sprite);
line //scale sprite down
line sprite_.scale.setTo(x_scaling_factor_percent, y_scaling_factor_percent);
line 
line game.physics.enable(local_game_object.frames[local_game_object.number_of_frames].sprite, Phaser.Physics.ARCADE);
line //set it so that the sprites rotate on hte center axis
line local_game_object.frames[local_game_object.number_of_frames].sprite.anchor.setTo(0.5, 0.5);
line //need to create all frames for clones too :( sprites[sprites.length-1].clones=[];
line if(local_game_object.number_of_frames==1) {
line local_game_object.frames[1].sprite.visible=true;
line } else {
line local_game_object.frames[local_game_object.number_of_frames].sprite.visible=false;
line }
line }
line //var global_current_frame=1;
line onLoadedFrame_ForProject = function(){
line //console.log('image loaded');
line var local_game_object=find_sprite_object_by_name(current_sprite_name);
line local_game_object.frames[local_game_object.number_of_frames]={};//need to have an object to hold the sprite
line local_game_object.frames[local_game_object.number_of_frames].sprite = game.add.sprite(local_game_object.sprite.x,local_game_object.sprite.y, project.game_objects[sprites.length-1].frames[local_game_object.number_of_frames-1].image_name);
line //did not follow parent local_game_object.frames[local_game_object.number_of_frames].sprite = local_game_object.sprite.addChild(game.make.sprite(local_game_object.sprite.x,local_game_object.sprite.y, project.game_objects[sprites.length-1].frames[local_game_object.number_of_frames-1].image_name));
line 
line sprite_ = front_layer.create(local_game_object.frames[local_game_object.number_of_frames].sprite);
line //scale sprite down
line sprite_.scale.setTo(x_scaling_factor_percent, y_scaling_factor_percent);
line 
line game.physics.enable(local_game_object.frames[local_game_object.number_of_frames].sprite, Phaser.Physics.ARCADE);
line //set it so that the sprites rotate on hte center axis
line local_game_object.frames[local_game_object.number_of_frames].sprite.anchor.setTo(0.5, 0.5);
line //need to create all frames for clones too :( sprites[sprites.length-1].clones=[];
line if(local_game_object.number_of_frames==1) {
line local_game_object.frames[1].sprite.visible=true;
line } else {
line local_game_object.frames[local_game_object.number_of_frames].sprite.visible=false;
line }
line if(project.game_objects[sprites.length-1].number_of_frames!=local_game_object.number_of_frames) {
line local_game_object.number_of_frames++
line }
line }
line 
line //i neededd to make a better loader for when I have many sprites from a project, cause the images seem to load not in real time, so I need to make sure the current sprite gets to be the right one.... by incrementing thed variable below I ensure that the right sprite is put in the right slot...maybe to clean up we can use this second loader for the first case too? try it later...I think it should work
line //loadproject
line //var loader_current_sprite=-1;
line //var loading_project=false;
line onLoaded2 = function(){
line loader_current_sprite++;
line //console.log('image loaded');
line sprites[loader_current_sprite].sprite = game.add.sprite(game.world.centerX,game.world.centerY, "img"+sprites[loader_current_sprite].name);
line sprite_ = front_layer.create(sprites[loader_current_sprite].sprite);
line //scale sprite down
line sprite_.scale.setTo(x_scaling_factor_percent, y_scaling_factor_percent);
line 
line game.physics.enable(sprites[loader_current_sprite].sprite, Phaser.Physics.ARCADE);
line //set it so that the sprites rotate on hte center axis
line sprites[loader_current_sprite].sprite.anchor.setTo(0.5, 0.5);
line sprites[loader_current_sprite].clones=[];
line 
line //load frames
line var game_object;
line set_current_sprite_name(sprites[loader_current_sprite].name);
line game_object=find_sprite_object_by_name(current_sprite_name);
line for(var index in project.game_objects) {
line for(var frame in project.game_objects[sprites.length-1].frames) {
line if(project.game_objects[index].name==sprites[loader_current_sprite].name) {
line if (typeof game_object.number_of_frames == 'undefined') {
line game_object.frames=[];
line game_object.number_of_frames=1;
line game_object.sprite.visible=false;
line game_object.current_frame=1;
line //} else {
line //	game_object.number_of_frames++;
line //}
line }
line loader = new Phaser.Loader(game)
line loader.image(project.game_objects[index].frames[frame].image_name, project.game_objects[index].frames[frame].frame_image_data);
line loader.onLoadComplete.addOnce(onLoadedFrame_ForProject)
line loader.start()
line }
line }
line }
line }
line 
line var x_scaling_factor_percent;
line var y_scaling_factor_percent;
line 
line onLoadedBackground = function(){
line //console.log('image loaded');
line bg=game.add.sprite(0,0, "backgroud");
line //calculate scaling factors
line //nerdshark: divide the new width by the old width
line //http://www.wikihow.com/Calculate-Percent-Change
line var x_substracted= bg.width - game.world.bounds.bottomRight.x;
line var y_substracted= bg.height - game.world.bounds.bottomRight.y;
line var x_percentage=parseFloat(x_substracted)/game.world.bounds.bottomRight.x;
line var y_percentage=parseFloat(y_substracted)/game.world.bounds.bottomRight.y;
line 
line //console.log("x_percentage"+x_percentage);
line //if (confirm('Do you want to scale the sprites to the size of the bakground(you will need to refresh and reload project to see the difference)?')) {
line //	// sclae
line //	x_scaling_factor_percent=x_percentage;
line //	y_scaling_factor_percent=y_percentage;
line //} else {
line // Do not scale
line x_scaling_factor_percent=1.0;
line y_scaling_factor_percent=1.0;
line //}
line 
line //nerdshark: if you want to use the raw number directly, then just multiply each dimension of the sprite by it (raw_scaling_factor * sprite x), (raw_scaling_factor * sprite_y)
line //scale backgroud
line bg.width =game.world.bounds.bottomRight.x;
line bg.height =game.world.bounds.bottomRight.y;
line background_.add(bg);
line //set it so that the sprites rotate on hte center axis
line //background_.anchor.setTo(0, 0);
line }
line 
line 
line document.getElementById("files").onchange = function () {
line var reader = new FileReader();
line 
line reader.onload = function (e) {
line // get loaded data and render thumbnail.
line document.getElementById("image").src = e.target.result;
line //game.load.image('userSprite1', 'assets/firstaid.png');
line 
line //prompt for sprite name
line var name=prompt("Give me a name for this sprite","Sprite-"+guid());
line for(var obj in sprites){
line if(sprites[obj].name==name) {
line alert("You must give each sprite a unique name");
line return;
line }
line }
line if(name=="") {
line alert("You must give each sprite a name");
line return;
line }
line //append image name to object model
line //add new sprite to object model
line sprites.push({})
line sprites[sprites.length-1].name=name;
line 
line loader = new Phaser.Loader(game);
line loader.image("img"+name, e.target.result );
line loader.onLoadComplete.addOnce(onLoaded);
line loader.start();
line image={};
line image.name=name;
line image.data=e.target.result
line project.images.push(image);
line //new game object
line var game_object={};
line game_object.frames=[];
line game_object.name=name
line project.game_objects.push(game_object);
line updateDialogBox();//update the sprite manager
line };
line 
line // read the image file as a data URL.
line reader.readAsDataURL(this.files[0]);
line };
line 
line document.getElementById("files2").onchange = function () {
line var reader = new FileReader();
line 
line reader.onload = function (e) {
line // get loaded data and render thumbnail.
line document.getElementById("background").src = e.target.result;
line //game.load.image('userSprite1', 'assets/firstaid.png');
line loader = new Phaser.Loader(game)
line loader.image("backgroud", e.target.result );
line loader.onLoadComplete.addOnce(onLoadedBackground)
line loader.start()
line project.background_ = document.getElementById("background").src;
line };
line 
line // read the image file as a data URL.
line reader.readAsDataURL(this.files[0]);
line }
line 
line project.game_objects=[];
line 
line document.getElementById("files3").onchange = function () {
line var reader = new FileReader();
line 
line reader.onload = function (e) {
line // get loaded data and render thumbnail.
line document.getElementById("frame").src = e.target.result;
line //game.load.image('userSprite1', 'assets/firstaid.png');
line 
line //prompt for sprite name
line 
line var new_frame_name = prompt("Give me a name for this frame","Frame-"+guid());
line for(var obj in project.game_objects) {
line if(project.game_objects[obj].name==name_of_current_object_in_sprite_manager) {
line for(var frame in project.game_objects[obj].frames) {
line if(project.game_objects[obj].frames[frame].alias==new_frame_name) {
line alert("Error: sprite " + project.game_objects[obj].name + " already has a frame called " + new_name + " every frame alias must be unique.");
line return;
line }
line }
line }
line }
line if(new_frame_name==null) {
line return;
line }
line var name=name_of_current_object_in_sprite_manager;
line var sprite_found=false;
line for(var obj in sprites){
line if(sprites[obj].name==name) {
line sprite_found=true;
line }
line }
line if(!sprite_found) {
line alert("Sprite "+ name + "does not exist");
line return;
line }
line set_current_sprite_name(name);
line var game_object;
line game_object=find_sprite_object_by_name(current_sprite_name);
line for(obj in 	project.game_objects) {
line if(project.game_objects[obj].name==name) {
line if (typeof game_object.number_of_frames == 'undefined') {
line game_object.frames=[];
line game_object.number_of_frames=1;
line game_object.sprite.visible=false;
line game_object.current_frame=1;
line //project.game_objects.push({});//object to contain frame info
line project.game_objects[obj].name=name;
line project.game_objects[obj].number_of_frames=game_object.number_of_frames;
line //project.game_objects[project.game_objects.length-1].frames=game_object.frames;
line project.game_objects[obj].visible=game_object.sprite.visible;
line project.game_objects[obj].current_frame=game_object.current_frame;
line } else {
line game_object.number_of_frames++;
line project.game_objects[obj].number_of_frames=game_object.number_of_frames;
line }
line var image_name="img"+name+"Frame"+game_object.number_of_frames;
line 
line //new frame
line var frame={};
line frame.frame_image_data=e.target.result
line frame.image_name=image_name;
line frame.alias=new_frame_name;	//this variable is set in the sprite dialog box when new frame is added
line project.game_objects[obj].frames.push(frame);
line }
line }
line //project.game_objects[name].frames.push(frame);
line loader = new Phaser.Loader(game)
line loader.image(image_name, e.target.result );
line loader.onLoadComplete.addOnce(onLoadedFrame)
line loader.start()
line image={}
line image.name=image_name;
line image.data=e.target.result
line updateDialogBox();
line //project.images.push(image);
line 
line 
line }
line // read the image file as a data URL.
line reader.readAsDataURL(this.files[0]);
line }
line 
line function loadHelperFunction(project_json) {
line project = JSON.parse(project_json);
line if(typeof project.pages == 'undefined') {//old version of s-found
line project.pages=[];
line //new page
line var page={};
line page.pagename="main";
line page.xml=project.block_xml;
line project.pages.push(page);
line }
line updatePages();
line 
line if(typeof project.background_ != 'undefined' && project.background_!="not set") {
line loader = new Phaser.Loader(game);
line loader.image("backgroud", project.background_ );
line loader.onLoadComplete.addOnce(onLoadedBackground);
line loader.start();
line }
line 
line 
line loader_current_sprite=-1;
line for(image in project.images) {
line sprites.push({})
line sprites[sprites.length-1].name=project.images[image].name;
line 
line 
line loader = new Phaser.Loader(game);
line loader.image("img"+project.images[image].name, project.images[image].data );
line loader.onLoadComplete.addOnce(onLoaded2);
line loader.start();
line }
line 
line Blockly.mainWorkspace.clear();
line var xml = Blockly.Xml.textToDom(project.pages[0].xml);
line Blockly.Xml.domToWorkspace(workspace, xml);
line }
line document.getElementById("files_project_upload").onchange = function () {
line var reader = new FileReader();
line 
line reader.onload = function (e) {
line // get loaded data and render thumbnail.
line var project_json = e.target.result;
line loadHelperFunction(project_json);
line };
line // read the image file as a data URL.
line reader.readAsText(this.files[0]);
line };
line 
line function loadURLproject(URL,RunCode) {
line if(typeof URL =='undefined'){
line var URL=prompt("Enter URL to project:");
line }
line /*
line var req = new XMLHttpRequest();
line req.open('GET', URL, false);
line req.send(null);
line if(req.status == 200) {
line project_json=req.responseText;
line }else{
line alert("ERROR:"+req.status)
line return;
line }
line */
line var xhr = new XMLHttpRequest();
line xhr.open("GET", URL, true);
line xhr.onload = function (e) {
line if (xhr.readyState === 4) {
line if (xhr.status === 200) {
line project_json=xhr.responseText;
line loadHelperFunction(project_json);
line if(RunCode) {
line evalCode();
line }
line } else {
line alert("ERROR:"+xhr.statusText);
line }
line }
line };
line xhr.onerror = function (e) {
line alert("ERROR:"+xhr.statusText);
line };
line xhr.send(null);
line //alert("project_json:"+project_json);
line /*
line project = JSON.parse(project_json);
line 
line if(typeof project.background_ != 'undefined' && project.background_!="not set") {
line loader = new Phaser.Loader(game);
line loader.image("backgroud", project.background_ );
line loader.onLoadComplete.addOnce(onLoadedBackground);
line loader.start();
line 
line 
line }
line 
line 
line loader_current_sprite=-1;
line for(image in project.images) {
line sprites.push({})
line sprites[sprites.length-1].name=project.images[image].name;
line 
line 
line loader = new Phaser.Loader(game);
line loader.image("img"+project.images[image].name, project.images[image].data );
line loader.onLoadComplete.addOnce(onLoaded2);
line loader.start();
line }
line 
line Blockly.mainWorkspace.clear();
line var xml = Blockly.Xml.textToDom(project.block_xml);
line Blockly.Xml.domToWorkspace(workspace, xml);
line // read the image file as a data URL.
line reader.readAsText(this.files[0]);
line */
line }
line /*
line if(typeof project.background_ != 'undefined' && project.background_!="not set") {
line loader = new Phaser.Loader(game);
line loader.image("backgroud", project.background_ );
line loader.onLoadComplete.addOnce(onLoadedBackground);
line loader.start();
line 
line }
line 
line 
line loader_current_sprite=-1;
line for(image in project.images) {
line sprites.push({})
line sprites[sprites.length-1].name=project.images[image].name;
line 
line loader = new Phaser.Loader(game);
line loader.image("img"+project.images[image].name, project.images[image].data );
line loader.onLoadComplete.addOnce(onLoaded2);
line loader.start();
line }
line 
line Blockly.mainWorkspace.clear();
line var xml = Blockly.Xml.textToDom(project.block_xml);
line Blockly.Xml.domToWorkspace(workspace, xml);
line */
line 
line //sprite object model
line /*
line spritea.push({})
line sprite[0].name="test";
line for(var obj in sprite){
line print(sprite[obj].name)
line }
line "end"
line */
line //(done)ok darkf, I have added the functionality of adding named sprites, now I just need to make blocks that work with the named sprites...  like have a drop-down listbox which lists the sprite name, that is my next goal
line //(done)need to add the sprite name to the created block as-well
line //(plan changed)adapt current blocks to accept spritename parameters
line //(done)add a switch current sprite block, which will act as the sprite parameter for blocks that would take one sprite as parameter
line //(done)add a switch tanget block for blocks that will need current block as parameter1 and target as parameter2 like the furrent point in direction twords enemy, I will rename to point current block twords target
line //(fixed) (quickhack, it seems x and y for the object get fonverted to strings, to they just get concatenated with the plus sing.) debug problem with foward, seems to be skipping to a different location now...
line //add a scrool tool to control speed of execution
line //maybe call mine s-foundation, since scratch is named after "starting from scratch" mine should be named after "starting form a solid foundation"?
line //there still seems to be some kind of bug when I use repeated setting angle to degrees and foward, the sprite disapears
line 
line //big problems
line //think of a way to do multythreading perhaps https://keithwhor.github.io/multithread.js/
line //maybe rename switch sprite to "with sprite" and modify JS MutantVM to run each instance of a sprite as a thread? is this even possible with blockly blocks and the JS interpreter?
line //I could use a comment to label each thread, make it clear that it is not really a comment
line /*
line Sadale: amigojapan, you don't really need a separate thread.
line [10:40pm] amoe がチャットルームに参加しました。
line [10:40pm] amigojapan: ok Sadale , then how?
line [10:41pm] Sadale: amigojapan, just use a for loop to iterate thru all sprites. Then, says, when a collision is detected, execute the blocks that handle the collision
line [10:42pm] amigojapan: Sadale: this "itterate thru all sprites" does nto fit very well with blockly.... basically it creates a big JS script, which is hten evaluated
line [10:44pm] rxo がチャットルームに参加しました。
line [10:44pm] amigojapan: Sadale: I guess I could inject the loop at the beginning of the code, I guess... let me thing about it
line amigojapan: Sadale: I will try making a small game as-is,    I think it would be better if we dont need to hide lots of functionality behind the scences...  maybe i can make a basic game loop where the user just inserts blocks where it is nessesary
line amigojapan: Sadale: I could implement synchronous multithreading... I have done this before in JS, I could do it again for this program... just take code from my old project.... it is very simple.  say we have 2 threads,    you take all the code and do array1=script1.split("/") array2=script2.split("/")  then you just eval one line from array1, then the next line from array2 and so on... it is very simple
line amigojapan: Sadale: but then I would need to use eval, and dtop using the JS evaluator that I am using now, that allows for stepping and stuff
line amigojapan: Adyrhan: anyhow,  I am not very worried about hackers at this point....  I owuld rather use the google sandboxed JS interpreter if possible.... if I use my methof of multithreding, I think I can just inject it before the script made by the user. and get it working in the sandbox... I think, if my calculations are correct
line //I think hte ocntext would be lost if I used several calls to eval in my VM, the only way I can think that the blockly variables would not dissapear is to remake all of hte blockly blocks in a way that they reffer to an exterrnal global object to hold variables in, maybe I could inject it into any JS that looks like a variable somehow
line amigojapan: GeDaMo: putting up a game loop when the user gets into the page would be less hiding of hte nitty gritty,  but probably hard to understand for a beginner
line darkf: so instead of "forever do ..." just make a "when frame begins do ..." block.
line [01:00am] LoLei がチャットルームを去りました。 (Ping timeout: 240 seconds)
line [01:02am] amigojapan: darkf: so, I call a function made for each sprite when the program starts?    the problem with this approch I think, is that unlike scratch, if they have an eternal loop inside the funtion, the other sprites wont move at all, it needs to yeald to the other sprites code in some way
line [01:02am] amigojapan: yeild*
line [01:04am] pooooooopsy がチャットルームに参加しました。
line [01:04am] lktp がチャットルームに参加しました。
line [01:05am] darkf: yes so just dont have loops like that
line amigojapan: darkf: as I said in the notes, I am tempted to just display a huge hame loop in blocks then the page is loaded.... and then just let the users modify the existing stuff....  have a prototype.... this would show the users kind of hte nitty gritty of game development instead of hiding it
line but wouldnt it just need to check for imput and check for collitions in the game loop? hmmm, I will try implimenting a simple game first with an event loop written in blocks... see if it gets hairy
line amigojapan: I need to implement a way to get user input before I can do that...
line */
line //(done)how to handle imput as events? can an eventListener be connected from phaser to call blockly block procedures as listeners?
line //maybe look at the starwars hour of code, it seems to accept events defined by the user// this is level 7 ,  but hell, it is compressed :(
line //January 1st 2016// I posted the question of how to handle events on the blockly google group https://groups.google.com/forum/#!topic/blockly/jex1uugSybg
line /*reply recieved:
line Unless I am mistaken there isn't a way currently to call into the context created when running a program with the JSInterpreter. On workaround could be to have a setInterval going inside the interpreter context that is polling an exposed api which is watching for events on the page and responds by calling your users code. https://neil.fraser.name/software/JS-Interpreter/docs.html
line 
line However I beleve that the Code.org Star Wars challenges use the pencilcode editor and not blockly. https://pencilcode.net/edit/first
line 2016-1-2 I got  it semy working by using normal eval() instead of the JS interpreter.... I should make some blocks that are prewritten events (functions) with a drop down to select the key
line */
line 
line 
line //small stuff
line //(done2016-1-10)implement collisioon detection
line /*
line //I have this, boths sprites are right over each other
line game.physics.enable(sprites[0].sprite, Phaser.Physics.ARCADE);
line game.physics.enable(sprites[1].sprite, Phaser.Physics.ARCADE);
line game.physics.startSystem(Phaser.Physics.ARCADE);
line game.physics.arcade.overlap(sprites[0].sprite , sprites[1].sprite);//this returns true//it seems overlap is pixel perfect after all!//no, I tested it and this is bouding box after all//apparently phaser does not have pixel perfect collision detection at all, they say it would be too expensive
line game.physics.arcade.collide(sprites[0].sprite , sprites[1].sprite);//but this returns false
line */
line 
line //(done2016-1-8)implement an update event
line ////(done2016-1-9, but still problem that each eval creates new clones, maybe make a cleanup event to get rid of the clones made in the startup event, or just erase all clones when people hit the stop button)implement making clones of sprites
line //maybe keep an array of clones inside each sprite, and implement "for each clone of sprite _" block
line //change the find sprite by name function, so that it works with a clone during the itteration of the for each clone block, also keep a copy of hte original sprite in a variable for debugging purposes, while the current sprite is a clone, perhaps add a field to the sprite called (current clone) which could work in hte find sprite function... all of this is so I dont need to remake the movement functions just for hte clones
line 
line //(done2016-1-8)implement a way to save and load blcoks(for testing purposes)
line //(done)allow for backgrounds(cant these just be sprites set all the way back?)
line //(partly done)allow for setting the depth of a sprite
line //(instead of this I will have both alert() and prompt(), and also the posibility of using a terminal)implement say, and maybe say _ wait _ secs, also think should be very simillar , for the meantime it shoudl be good enough with the print block, eventually implement this
line //(instead of this I will have both alert() and prompt(), and also the posibility of using a terminal)implement ask _ hmmm, I think this is already good enough with the prompt block
line 
line //implement costumes next costume , and switch to costume _
line /*
line I am thinking how to add animated sprites to my second programming language, maybe I will jsut add a bunch of invisible sprites
line and then assign the image of each sprite to the visible sprite during each frame to create an animation, yeah that sounds like a
line plan…. I needed to word it out, so each game_object also needs a frames array which is really just a bunch of sprites. and I
line need to add a “change to frame number X” block and a “change to next frame” block, and also a frame count variable block…
line this one should take the input of which game object we are talking about….
line how to assing the image of a sprite to another sprite in phaser?
line var fake_ChangeTexture=function (sprite_dest, sprite_source) {
line var dest_x=sprite_dest.x;
line var dest_y=sprite_dest.y;
line sprite_dest.destroy();
line game.add.sprite(dest_x, dest_y, sprite_source.key, sprite_source.frame);
line }
line 
line car=find_sprite_object_by_name("car");
line frog=find_sprite_object_by_name("frog");
line fake_ChangeTexture(frog.sprite,car.sprite)
line 
line by the way, I am trying to set a texture of a sprite to the texture of another sprite,  but phaser does not have such a function,
line so I am actually making a copy of the data in the source sprite, deleting the source sprite, then making a new sptire that uses
line the texture of the sprite I want to copy teh texture….. I hope this does not end up being too slow
line but I need to do it this way, I suspect they are going to tell me to use a spritesheet, but they dont udnerstand I am making a
line programming IDE and stuff, I really need to do it this way. I mean, I need to copy a texture from one sprite to another
line by changing the original sptire into a series of hidden sprites, and changign their texture when the user puts the “change sprite to next frame of animation” block on the main loop of hteir program
line KaffeeJunky123: amigojapan: wouldn't it be easier to use separate sprites for the different frames of the animation and just hide the sprites that are not the current animation frame?
line amigojapan:that and I would need to update their X Y and Angle axis to be the same as the original sprite whenever those are changed…. but yeah, it is possible,d effinitly
line 
line 
line each sprte should contain:
line -current_fame_number(need to expose this in block)
line -number_of_frames(need to expose this in block)
line -a frames array
line -sprite
line 
line add_frame(game_Object){
line if (typeof game_object.number_of_frames == 'undefined') {
line game_object.number_of_frames=1;
line game_object.frames=[];
line } else {
line game_object.number_of_frames++;
line }
line frameImage=loadFrame();
line game_object.frames.push(frameImage);
line }
line 
line //add this function call to any code that changes the position of a sprite
line function update_position_of_frames(game_Object) {
line for(frame in game_Object.frames) {
line frame.sprite.x=game_Object.sprite.x;
line frame.sprite.y=game_Object.sprite.y;
line frame.sprite.angle=game_Object.sprite.angle;
line }
line }
line 
line amigojapan: KaffeeJunky123: hmm, interesting there is somethig called “chidl sprites” in phaser, I may be able to make the
line animated sprites follow the main sprite just by setting them to be children… isntead of making a complicated fucntion to do
line it and needing ot add it to other stuff
line https://phaser.io/examples/v2/sprites/child-sprites
line 
line function next_fame(game_Object) {
line loop thru all frames {
line if(frame.number==game_object.current_fame_number) {
line frame.sprite.visible = false;
line if(game_object.current_fame_number==game_object.number_of_frames) {
line game_object.current_fame_number=0;
line } else {
line game_object.current_fame_number++;
line }
line }
line }
line loop thru all frames {
line if(frame.number==game_object.current_fame_number) {
line frame.sprite.visible = true;
line }
line }
line 
line 
line //save project structure
line //new project
line var project = {};
line project.game_objects=[];
line project.pages=[];
line //new page
line var page={};
line page.pagename="page1";
line page.xml="<xml>";
line project.pages.push(page);
line //new game object
line var game_object={};
line game_object.name="data1";
line game_object.frames=[];
line project.game_objects.push(game_object);
line //new game object
line var game_object={};
line game_object.name="data2";
line game_object.frames=[];
line project.game_objects.push(game_object);
line //new frame
line var frame={};
line frame.test="hi1";
line frame.bye="bye1";
line project.game_objects[0].frames.push(frame);
line //new frame
line var frame={};
line frame.test="hi2";
line frame.bye="bye2";
line project.game_objects[0].frames.push(frame);
line var frame={};
line frame.test="hi3";
line frame.bye="bye3";
line project.game_objects[1].frames.push(frame);
line var frame={};
line frame.test="hi4";
line frame.bye="bye4";
line project.game_objects[1].frames.push(frame);
line 
line //parsing data structure
line for(var obj in project.game_objects) {
line print(project.game_objects[obj].name);
line for(var frame in project.game_objects[obj].frames) {
line print(project.game_objects[obj].frames[frame].test);
line }
line }
line "Json:"+JSON.stringify(project)
line output:
line data1
line hi1
line hi2
line data2
line hi3
line hi4
line Json:{"game_objects":[{"name":"data1","frames":[{"test":"hi1","bye":"bye1"},{"test":"hi2","bye":"bye2"}]},{"name":"data2","frames":[{"test":"hi3","bye":"bye3"},{"test":"hi4","bye":"bye4"}]}],"pages":[{"pagename":"page1","xml":"<xml>"}]}
line 
line //pages stuff
line //add functionality to delete a page
line //enssure page names are unique
line https://jsfiddle.net/pnk7wtrf/36/
line <button onclick="addPage()">Add page</button>
line <div id="pages">
line pages div uninitialized
line </div>
line 
line //second try
line //save project structure
line //new project
line var project = {};
line project.game_objects=[];
line project.pages=[];
line var page={};
line page.pagename="main";
line project.pages.push(page);
line updatePages();
line 
line function updatePages() {
line document.getElementById("pages").innerHTML="Pages"
line //parsing data structure
line for(var pageindex in project.pages) {
line var finaltag=(project.pages[pageindex].pagename=="main")?"":">(-)"
line document.getElementById("pages").innerHTML=document.getElementById("pages").innerHTML+" <a href=javascript:clikedLink('"+project.pages[pageindex].pagename+"')"+ " id="+project.pages[pageindex].pagename+">"+project.pages[pageindex].pagename+"</a>"+" <a href=javascript:clikedDeleteLink('"+project.pages[pageindex].pagename+"')"+ " id=del"+project.pages[pageindex].pagename+finaltag+"</a>";
line }
line }
line function addPage() {
line //new page
line var page={};
line page.pagename=prompt("Enter new page name","page#");
line page.xml="<xml>";
line for(var pageindex in project.pages){
line if(project.pages[pageindex].pagename==page.pagename) {
line alert("Error, page name must be unique, '" + page.pagename + "' already exists.")
line return
line }
line }
line 
line project.pages.push(page);
line updatePages();
line }
line function clikedLink(linkName) {
line alert("s:"+linkName);
line }
line function clikedDeleteLink(linkName) {
line var answer = confirm("Delete page "+linkName+"? -- warning this cannot be undone, blocks in this page will be deleted!!")
line if (answer) {
line for(var pageindex in project.pages){
line if(project.pages[pageindex].pagename==linkName) {
line if(project.pages.length==0){
line break;
line }else{
line project.pages.splice(pageindex, 1);
line }
line }//);
line }
line updatePages();
line }
line }
line 
line //adding a sprite adding dialogue box
line https://jsfiddle.net/fmzumvv3/18/
line //submit by link
line https://jsfiddle.net/rdc3ej40/
line deltab: amigojapan: hmm, you have an array with a frames property?
line [6:49pm] deltab: JSON doesn't have a way to represent that
line 
line /*
line -(done: decided on paged)modules
line amigojapan: darkf: I think the other hard part will be braking up the projects into “modules” or “Pages”
line to be able to break up a project into smalled pices, becuase blockly does not have such a functionality….
line I want my users to be able to develop in smaller pages, cause making a huge block program in only one workspace
line would be hell
line 
line -(done)implement hide show sprite blocks
line -(done)load and save xml for blocks in text mode
line -(done2016-2-4)implement it in a mock download upload style
line Meowmers: amigojapan_: Wait, each element of that array is of type File (https://developer.mozilla.org/en-US/docs/Web/API/File)
line [3:48pm] Meowmers: amigojapan_: After you get your file object, you use https://developer.mozilla.org/en-US/docs/Web/API/FileReader to read the content of that file.
line [3:48pm] Meowmers: amigojapan_: Then after you use the file reader constructor to create a file reader, you use .readAsText() on that.
line [3:49pm] Meowmers: amigojapan_: That is going to give you a string with the contents of the file.
line -(fixed)bug, there seems to be more events of hte same kind fired every time eval is clicked
line -(changed to adjust to teh fps)can i reduce the eventloop timer to 0 ms, and if so will it still run? what is the optimal event polling time setting?
line -(I think this is done, check later)stop timmers when script is stopped
line -I think I will make a free version that needs to be connected online, and a pay version for offline if I see many people download it
line 
line -(done)make some way of implenting timers, maybe like in scratch (this should be easy for me), or maybe, if possible(not sure if I can do it cause it is functional) make it in the way Javascript does times with set_interval
line -(done)make frogger in s-found
line -(done)add a comment to the code that mentions what "page" the code is on
line -(done)make the programming div 95% width so that the vertical scrollbar is usable on mac
line -(done)make a way  to detect a colission between two clones of a sprite
line greg suggested making a second kind of block which would be put under the normal [for each clone of sprite] but
line one that works for the clones of the target and can be nested inside the other block, use different variable names than the other block too
line what should I call such a block? [nested loop on target sprite]? man , this is getting hard for noobs to understand
line -(done)modify timer block to accept an ID thru a variable too (to make bomberman enemy explode in a certain time)
line -(done)add block to clear timer(put inside timer function itself(is this possible?) (should also accept a variable as input)
line amigojapan wonders if it is possible to set a clearTimeour() inside a setTimeout()’s callback function  /me googles
line [5:43pm] amigojapan: yes, seems it is possible to fo it :)
line -(done)add A and B button to put bomb down
line (not easy)try to make a general function so it is easy to add any button
line -(done) make dialog box for managing sprites and frames
line -(done)fix problem of adding a frame to second object adds the frame to first object
line -(done)make aliases for frame names
line -(done)add a block to switch to an aliased frame
line -(partially done, elminated highlights from code displayed to user)fix highlight problem appearing in code
line -(done)make terminal window
line http://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
line https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_textarea_get
line (no)encompasing term object?
line commands:
line (done)clear();
line (done)echo("hello world");
line (done)x=input("prompt");
line (done)otherwise just eval anything.
line -(done)rename the echo block to alert and use the echo block for the terminal output
line -(done)make input block for terminal input
line -(later)add all the array blocks from blockly playground for keeping track of the cells of bomberman(do I really need this? ah yes, to create the explotions and put the bombs in hte center of the array)
line -merge the parts of upload_load_project and url_open_project that are the same into some functions that can be shared
line -bomberman (use for each clone of bombs colide with bomberman, use foreach baddy collide with bomberman)
line how will I deal with baddy colides with bomb,try nested forwach, but probably wont work cause of shared object counter?
line if it does not work make the counter a member of each game_object
line -(later)testing how to use a 2D array in blocklyplayground
line -make the game using integer round of hte x and y instead of arrays, this should be easier
line -mouse event suport
line -ABS block
line -print of GUI block
line -poop game
line -vewis (make example that follows a character)
line I think I will just move everything together with the backround except the main character... naybe make
line a (for everything except currect sprite block) to do this... use that block then move everything in the direction pointed
line also need to specify if we want the background scaled of now, this should probably show anothed dialogbox with a checkmark
line coudl also put some values and add a "scale all sprites by this" also with a checkmark.
line -(sone,but I need to fix loadproject from URL to test it on smartphones)make screen controls(how can I make them repeat while they are pressed like keys do? (maybe a timer for each button huh...))
line maybe make a function that encapsuled the definition of a key to make it eaasy to add any new keys
line maybe make a timer which calls the function of a key repeatedly to simulate key pressing until ti is released
line -add blocks for sprite width and sprite height(should I bother to make it of the current frame? maybe later)
line -prevent highlighting from causing problems when there is only another view(cause only highllights for this page to appear)
line -make an export to standalone feature
line -make particle system
line -make a block that returns the current angle, call it direction like in scratch?
line -clear all the sprites when new project is loaded, also make a new project loadable even if user does not refresh window
line -clear workspace when deleted page
line -make a place to open examples directly by clicking on urls with screenshot thumbnails
line 
line priorities:everythiing before bomberman
line 
line Sadale: that is good, I still have many things I want to add to my langauge before i participate, like a proper GUI, and make
line it easy to add and remove assets like sprites frames sounds(which it still does not have) and backrounds, I want to have views(
line following hte main character while the background and other obejcts scroll, I also want to have aliases for frames(today I spent
line a logn time ifguring out which fame number is which frame) and maybe a particle system (so I can display the stinkyness at GGJ)
line [8:26pm] amigojapan: so one year is good, lots of time to do that, ah I forgot, mouse support, and terminal too,    I also want to
line implement many games in my lanaguge so I am not stuck debugging hte language at GGJ
line 
line Sadale: I am looking at “programming problems for kids”  and I want something even easier than this, https://marekrychlik.com/node/417    , basically I want it to start with simple thinsg like “make a variable, set it to something and print it”, “make a for look that prints from 5 to 32” , “make a function that takes 2 parameter strings and concatenates them, then print the return value”, I think I may need to write them myself,  cause I want many many of these, all the internte problems are too hard
line 
line */
