//  GLOBAL VARIABLE 
var rad = Math.PI/180;

var redId = 0;
var blueId = 1;

var body = 0;
var head = 1;
var UFArm = 2;
var LFArm = 3;
var UBArm = 4;
var LBArm = 5;
var UFLeg = 6;
var LFLeg = 7;
var UBLeg = 8;
var LBLeg = 9;
var box = 10;
var bbox = 11;
//------------------





// CONTROL VARIABLE //
var keyFlag = [null, null];
var hurtFlag = [null, null];

var action = [null, null];
var pose = [null, null];

var animation_red = [null,null,null,null,null];
var animation_blue = [null,null,null,null,null];
var animation = [animation_red,animation_blue];

var anim_index= [0,0];


function reset(player,Id){
    keyFlag[Id] = true;
    hurtFlag[Id] = true;
    hitFlag[Id] = false;

    pose[Id] = pose_Bend(Id);
    action[Id] = "idle";
    animation[Id][0] = animation_Idle(player,Id,pose[Id]);
    animation[Id][1] = animation_Forward(player,Id,pose[Id],mov_duration);
    animation[Id][2] = animation_Back(player,Id,pose[Id],mov_duration);
    animation[Id][3] = animation_Kick(player,Id,pose[Id],kick_duration);
    animation[Id][4] = animation_Back(player,Id,pose[Id],hit_duration);

    anim_index[Id] = 0;
    animation[Id][anim_index[Id]].start();
}
// ----------------- //


// STATS //
var mov_speed_forward = 0.15;
var mov_speed_back = 0.12;

var mov_duration = 300;
var kick_duration = 1000;
var hit_duration = 400;

var edge = 15; //the edges of the screen
var distance = 5; //minimum distance between the two figther
// ----- //


//------------------------------------PLAYER CONTROLS----------------------------------------//
function player_Handler(key, player, Id){

    if (key.keyCode == 97){
        animation[Id][anim_index[Id]].stop();
    }


    if (Id) { //Blue
        var forward = 111; // o
        var back = 112;    // p
        var kick = 107;    // k
    }
    else{ 
        var forward = 119; // w
        var back = 113;    // q
        var kick = 115;    // s
    }



	if (keyFlag[Id]){

        switch(key.keyCode){

            case forward:                   
                // control
                keyFlag[Id] = false;
                action[Id] = "forward";
            break;


            case back:
                // control
                keyFlag[Id] = false;
                action[Id] = "back";
            break;


            case kick:
                // control
                keyFlag[Id] = false;
                action[Id] = "kick";
            break; 
        }    
	}
}
//-------------------------------------------------------------------------------------------//




function update(player,p_Id,adv,a_Id){ 

    setBoundingBox(player);

    var pos = player[body].position.x;
    var a_pos = adv[body].position.x;


    switch(action[p_Id]){

        case "forward":
            // animation
            if (anim_index[p_Id] != 1) {
                animation[p_Id][anim_index[p_Id]].stop();
                anim_index[p_Id] = 1;
                animation[p_Id][anim_index[p_Id]].start();
            }


            if(p_Id){ // Blue
                var limit = limit_left(pos,a_pos);
                pos = Math.max(limit,pos - mov_speed_forward); 
            }
            else{ // Red
                var limit = limit_right(pos,a_pos);
                pos = Math.min(limit,pos + mov_speed_forward);
            }
        break;


        case "back":
            // animation
            if (anim_index[p_Id] != 2) {
                animation[p_Id][anim_index[p_Id]].stop();
                anim_index[p_Id] = 2;
                animation[p_Id][anim_index[p_Id]].start();
            }


            if (p_Id){ // Blue
                var limit = limit_right(pos,a_pos);
                pos = Math.min(limit,pos + mov_speed_back); 
            }
            else{ // Red
                var limit = limit_left(pos,a_pos);
                pos = Math.max(limit,pos - mov_speed_back); 
            }
        break;


        case "kick":
            // animation
            if (anim_index[p_Id] != 3) {
                animation[p_Id][anim_index[p_Id]].stop();
                anim_index[p_Id] = 3;
                animation[p_Id][anim_index[p_Id]].start();
            }


            if (hurtFlag[a_Id]){
                if (isHit(player, adv, LBLeg)) {
                    hurtFlag[a_Id] = false;
                    action[a_Id] = "hit";
                }
            }
        break;


        case "hit":
            // animation
            if (anim_index[p_Id] != 2) {
                animation[p_Id][anim_index[p_Id]].stop();
                anim_index[p_Id] = 2;
                animation[p_Id][anim_index[p_Id]].start();
            }


            if (p_Id){ // Blue
                var limit = limit_right(pos,a_pos);
                pos = Math.min(limit,pos + 0.2); 
            }
            else{ // Red
                var limit = limit_left(pos,a_pos);
                pos = Math.max(limit,pos - 0.2); 
            }
        break;

    }
    player[body].position.x = pos;
    pippo(p_Id, action[p_Id]);
}








// LIMIT FUNCTION
function limit_left(p_pos, a_pos){
    var limit = -edge;
    if (p_pos > a_pos) { limit = a_pos + distance; }

    return limit;
}

function limit_right(p_pos, a_pos){
    var limit = edge;
    if (p_pos < a_pos) { limit = a_pos - distance; }

    return limit;
}