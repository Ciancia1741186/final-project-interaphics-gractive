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




// ANIMATION SETTINGS //
var anim_idle = 0;
var anim_Fdash = 1;
var anim_Bdash = 2;
var anim_kick = 3;
var anim_punch = 4;
var anim_hit = 5;
var anim_KO = 6;

var animation_red = [];
var animation_blue = [];
var animation = [animation_red,animation_blue];

var anim_index= [0,0];

function setAnimation(player,Id){
    animation[Id][anim_idle] = animation_Idle(player, Id, pose[Id]);
    animation[Id][anim_Fdash] = animation_Forward(player, Id, pose[Id], mov_duration);
    animation[Id][anim_Bdash] = animation_Back(player, Id, pose[Id], mov_duration);
    animation[Id][anim_kick] = animation_Kick(player, Id, pose[Id], kick_duration);
    animation[Id][anim_punch] = animation_Punch(player, Id, pose[Id], punch_duration);
    animation[Id][anim_hit] = animation_HitByKick(player, Id, pose[Id], hit_duration);
    animation[Id][anim_KO] = animation_KO(player, Id, pose[Id], 1200);
}
// ------------------ //



// CONTROL VARIABLE //
var keyFlag = [null, null];
var hurtFlag = [null, null];
var hitFlag = [null, null];

var refreshFlag = false;

var action = [null, null];
var pose = [null, null];
// ---------------- //



function reset(player,Id){
    keyFlag[Id] = true;
    hurtFlag[Id] = true;
    hitFlag[Id] = false;

    pose[Id] = pose_Bend(Id);
    action[Id] = "idle";
    
    changeAnimation(animation, anim_index, anim_idle, Id);
}
// ----------------- //


// STATS //
var mov_speed_forward = 0.2;
var mov_speed_back = 0.15;

var mov_duration = 300;
var kick_duration = 800;
var punch_duration = 500;
var hit_duration = 500;

var edge = 15; //the edges of the screen
var distance = 4; //minimum distance between the two figther
// ----- //


//------------------------------------PLAYER CONTROLS----------------------------------------//
function player_Handler(key, player, Id){

    if (Id) { //Blue
        var forward = 111; // o
        var back = 112;    // p
        var kick = 107;    // k
        var punch = 106;   // j
    }
    else{ 
        var forward = 119; // w
        var back = 113;    // q
        var kick = 115;    // s
        var punch = 100;   // d
    }


	if (keyFlag[Id]){

        switch(key.keyCode){

            case forward:                   
                action[Id] = "forward";
            break;


            case back:
                action[Id] = "back";
            break;


            case kick:
                action[Id] = "kick";
            break; 


            case punch:
                action[Id] = "punch";
            break;
        }    
    }
    
    var restart = 32; //space

    if (refreshFlag){
        switch(key.keyCode){
            case restart:
                window.location.reload();
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
            keyFlag[p_Id] = false;
            // change animation
            if (anim_index[p_Id] != anim_Fdash) { changeAnimation(animation, anim_index, anim_Fdash, p_Id); }

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
            keyFlag[p_Id] = false;
            // change animation
            if (anim_index[p_Id] != anim_Bdash) { changeAnimation(animation, anim_index, anim_Bdash, p_Id); }

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
            keyFlag[p_Id] = false;
            // change animation
            if (anim_index[p_Id] != anim_kick) { changeAnimation(animation, anim_index, anim_kick, p_Id); }

            if (hurtFlag[a_Id] & hitFlag[p_Id]){
                if (isHit(player, adv, LBLeg)) {
                    hurtFlag[a_Id] = false;
                    hp[a_Id] -= 10;
                    if (hp[a_Id] <= 0) { action[a_Id] = "KO"; }
                    else { action[a_Id] = "hit"; }  
                }
            }
        break;


        case "punch":
            keyFlag[p_Id] = false;
            // change animation
            if (anim_index[p_Id] != anim_punch) { changeAnimation(animation, anim_index, anim_punch, p_Id); }

            if (hurtFlag[a_Id] & hitFlag[p_Id]){
                if (isHit(player, adv, LFArm)) {
                    hurtFlag[a_Id] = false;
                    hp[a_Id] -= 10;
                    if (hp[a_Id] <= 0) { action[a_Id] = "KO"; }
                    else { action[a_Id] = "hit"; }                
                }
            }
        break;
        


        case "hit":
            keyFlag[p_Id] = false;
            // // change animation
            if (anim_index[p_Id] != anim_hit) { changeAnimation(animation, anim_index, anim_hit, p_Id); }

            if (p_Id){ // Blue
                var limit = limit_right(pos,a_pos);
                pos = Math.min(limit,pos + 0.08); 
            }
            else{ // Red
                var limit = limit_left(pos,a_pos);
                pos = Math.max(limit,pos - 0.08); 
            }
        break;



        case "KO":
            keyFlag[p_Id] = false;
            // // change animation
            if (anim_index[p_Id] != anim_KO) { changeAnimation(animation, anim_index, anim_KO, p_Id); }
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
    //
    //
    pippo(p_Id, action[p_Id]);
    //
    //
}


// HP UPDATE
var hp = [100, 100];

function update_Hp(hp_bar){
    hp_bar[redId].style.width = hp[redId] + '%';
    hp_bar[blueId].style.width = hp[blueId] + '%';
}
//






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


// SET HIT-FLAG
function setHitFlag(Id,value){
    hitFlag[Id] = value;
}






// ENDGAME
function endGame(l_Id){  // Ineluttabile

    keyFlag = [false, false];

    // Win Quotes
    var win_quote = document.createElement('div');
    
    if (l_Id == blueId) {  // RED WINS
        var w_Id = redId;
        win_quote.style.cssText = 'position: absolute; left: 490px; top: 100px; font-size: 80px; color:red';
        document.body.appendChild(win_quote);
        win_quote.innerHTML = "RED WINS";
    }
    else {                 // BLUE WINS
        var w_Id = blueId;
        win_quote.style.cssText = 'position: absolute; left: 470px; top: 100px; font-size: 80px; color:blue';
        document.body.appendChild(win_quote);
        win_quote.innerHTML = "BLUE WINS";
    }
    
    action[l_Id] = "defeated";
    action[w_Id] = "victorious";
    //

    // Restart Quote
    refreshFlag = true;

    var restart_quote = document.createElement('div');
    restart_quote.style.cssText = 'position: absolute; left: 550px; top: 180px; font-size: 30px; color:white';
    document.body.appendChild(restart_quote);
    restart_quote.innerHTML = "press SPACE to restart";
    //
}