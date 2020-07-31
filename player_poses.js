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





function pose_Empty() { 
    var pose ={
	    body_rotation_x: 0,
	    body_rotation_y: 0,
	    body_rotation_z: 0,

	    head_rotation_x: 0,
	    head_rotation_y: 0,
	    head_rotation_z: 0,

	    UFArm_rotation_x: 0,
	    UFArm_rotation_y: 0,
	    UFArm_rotation_z: 0,

	    LFArm_rotation_x: 0,
	    LFArm_rotation_y: 0,
	    LFArm_rotation_z: 0,

	    UBArm_rotation_x: 0,
	    UBArm_rotation_y: 0,
	    UBArm_rotation_z: 0,

	    LBArm_rotation_x: 0,
	    LBArm_rotation_y: 0,
	    LBArm_rotation_z: 0,

	    UFLeg_rotation_x: 0,
	    UFLeg_rotation_y: 0,
	    UFLeg_rotation_z: 0,

	    LFLeg_rotation_x: 0,
	    LFLeg_rotation_y: 0,
	    LFLeg_rotation_z: 0,

	    UBLeg_rotation_x: 0,
	    UBLeg_rotation_y: 0,
	    UBLeg_rotation_z: 0,

	    LBLeg_rotation_x: 0,
	    LBLeg_rotation_y: 0,
		LBLeg_rotation_z: 0,
		
		//
		body_position_y: 0,
    };
    return pose;
}


function set_Pose(player,pose){

	player[body].rotation.x = pose.body_rotation_x;
	player[body].rotation.y = pose.body_rotation_y;
	player[body].rotation.z = pose.body_rotation_z;

	player[head].rotation.x = pose.head_rotation_x;
	player[head].rotation.y = pose.head_rotation_y;
	player[head].rotation.z = pose.head_rotation_z;

	player[UFArm].rotation.x = pose.UFArm_rotation_x;
	player[UFArm].rotation.y = pose.UFArm_rotation_y;
	player[UFArm].rotation.z = pose.UFArm_rotation_z;

	player[LFArm].rotation.x = pose.LFArm_rotation_x;
	player[LFArm].rotation.y = pose.LFArm_rotation_y;
	player[LFArm].rotation.z = pose.LFArm_rotation_z;

	player[UBArm].rotation.x = pose.UBArm_rotation_x;
	player[UBArm].rotation.y = pose.UBArm_rotation_y;
	player[UBArm].rotation.z = pose.UBArm_rotation_z;

	player[LBArm].rotation.x = pose.LBArm_rotation_x;
	player[LBArm].rotation.y = pose.LBArm_rotation_y;
	player[LBArm].rotation.z = pose.LBArm_rotation_z;

	player[UFLeg].rotation.x = pose.UFLeg_rotation_x;
	player[UFLeg].rotation.y = pose.UFLeg_rotation_y;
	player[UFLeg].rotation.z = pose.UFLeg_rotation_z;

	player[LFLeg].rotation.x = pose.LFLeg_rotation_x;
	player[LFLeg].rotation.y = pose.LFLeg_rotation_y;
	player[LFLeg].rotation.z = pose.LFLeg_rotation_z;

	player[UBLeg].rotation.x = pose.UBLeg_rotation_x;
	player[UBLeg].rotation.y = pose.UBLeg_rotation_y;
	player[UBLeg].rotation.z = pose.UBLeg_rotation_z;

	player[LBLeg].rotation.x = pose.LBLeg_rotation_x;
	player[LBLeg].rotation.y = pose.LBLeg_rotation_y;
	player[LBLeg].rotation.z = pose.LBLeg_rotation_z;

	//
	player[body].position.y = pose.body_position_y;
}





//---STANCE POSE---
function pose_Stance(Id){
	// pose standards
	var pose = pose_Empty();
	var side = 1;
	if (Id) {side =-1;}
	//---------------

	pose.body_rotation_y = (-160 *rad) * side;

	// ARMS
		// Forward
		pose.UFArm_rotation_x = (50*rad);
		pose.UFArm_rotation_y = (70*rad) * side;
		pose.UFArm_rotation_z = (-70*rad) *side;

		pose.LFArm_rotation_y = (90*rad) *side;

		// Back
		pose.UBArm_rotation_y = (-20*rad) *side;
		pose.UBArm_rotation_z = (70*rad) *side;

		pose.LBArm_rotation_y = (-90*rad) *side;
	//

	// LEGS
		// Forward
		pose.UFLeg_rotation_x = (20*rad);
		pose.UFLeg_rotation_y = (-35*rad) *side;
		pose.UFLeg_rotation_z = (20*rad) *side;

		pose.LFLeg_rotation_x = (-30*rad);

		// Back
		pose.UBLeg_rotation_x = (20*rad);
		pose.UBLeg_rotation_y = (-20*rad) *side;
		pose.UBLeg_rotation_z = (-5*rad) *side;

		pose.LBLeg_rotation_x = (-30*rad);
	//

	

	return pose;
}
//-------------



//---BEND POSE---
function pose_Bend(Id){
	// pose standards
	var pose = pose_Empty();
	var side = 1;
	if (Id) {side =-1;}
	//---------------

	pose.body_rotation_y = (-160 *rad) * side;

	
	// ARMS
		// Forward
		pose.UFArm_rotation_x = (50*rad);
		pose.UFArm_rotation_y = (70*rad) * side;
		pose.UFArm_rotation_z = (-65*rad) *side;

		pose.LFArm_rotation_y = (90*rad) *side;

		// Back
		pose.UBArm_rotation_y = (-20*rad) *side;
		pose.UBArm_rotation_z = (65*rad) *side;

		pose.LBArm_rotation_y = (-90*rad) *side;
	//

	// LEGS
		// Forward
		pose.UFLeg_rotation_x = (20*rad);
		pose.UFLeg_rotation_y = (-35*rad) *side;
		pose.UFLeg_rotation_z = (25*rad) *side;

		pose.LFLeg_rotation_x = (-40*rad);

		// Back
		pose.UBLeg_rotation_x = (20*rad);
		pose.UBLeg_rotation_y = (-30*rad) *side;
		pose.UBLeg_rotation_z = (-5*rad) *side;

		pose.LBLeg_rotation_x = (-30*rad);
	//

	//
	pose.body_position_y -= 0.2;

	return pose;
}
//-------------



//---BACK POSE---
function pose_Back(Id){
	// pose standards
	var pose = pose_Empty();
	var side = 1;
	if (Id) {side =-1;}
	//---------------

	pose.body_rotation_y = (-180*rad) * side;

	// ARMS
		// Forward
		pose.UFArm_rotation_x = (50*rad);
		pose.UFArm_rotation_y = (70*rad) * side;
		pose.UFArm_rotation_z = (-70*rad) *side;

		pose.LFArm_rotation_y = (90*rad) *side;

		// Back
		pose.UBArm_rotation_y = (-20*rad) *side;
		pose.UBArm_rotation_z = (70*rad) *side;

		pose.LBArm_rotation_y = (-90*rad) *side;
	//


	// LEGS
		// Forward
		pose.UFLeg_rotation_x = (20*rad);
		pose.UFLeg_rotation_y = (-50*rad) * side;
		pose.UFLeg_rotation_z = (50*rad) * side;
		
		pose.LFLeg_rotation_x = (-50*rad);

		// Back
		pose.UBLeg_rotation_z = (-30*rad) * side;
	//

	//
	pose.body_position_y += 0.3;

	return pose;
}
//-------------



//---FORWARD POSE---
function pose_Forward(Id){
	// pose standards
	var pose = pose_Empty();
	var side = 1;
	if (Id) {side =-1;}
	//---------------

	pose.body_rotation_y = (-140*rad) *side;

	// ARMS
		// Forward
		pose.UFArm_rotation_x = (50*rad);
		pose.UFArm_rotation_y = (70*rad) * side;
		pose.UFArm_rotation_z = (-70*rad) *side;

		pose.LFArm_rotation_y = (100*rad) *side;

		// Back
		pose.UBArm_rotation_y = (-20*rad) *side;
		pose.UBArm_rotation_z = (50*rad) *side;

		pose.LBArm_rotation_y = (-90*rad) *side;
	//


	// LEGS
		// Forward
		pose.UFLeg_rotation_x = (-40*rad);
		pose.UFLeg_rotation_z = (20*rad) *side;
		pose.UFLeg_rotation_y = (20*rad) *side;

		// Back
		pose.UBLeg_rotation_x = (45*rad);
		pose.UBLeg_rotation_z = (-10*rad) *side;

		pose.LBLeg_rotation_x = (-60*rad);
	//

	//
	pose.body_position_y -= 0.7;

	return pose;
}
//-------------



//---KICK POSES---
	// Bend
	function pose_Kick_Bend(Id){
		// pose standards
		var pose = pose_Empty();
		var side = 1;
		if (Id) {side =-1;}
		//---------------

		pose.body_rotation_z = (-10*rad) *side;
		pose.body_rotation_y = (-170*rad) *side;

		// ARMS
			// Forward
			pose.UFArm_rotation_y = (50*rad) *side;
			pose.UFArm_rotation_z = (-50*rad) *side;

			pose.LFArm_rotation_y = (90*rad) *side;

			// Back
			pose.UBArm_rotation_x = (50*rad);
			pose.UBArm_rotation_y = (-50*rad) *side;
			pose.UBArm_rotation_z = (60*rad) *side;

			pose.LBArm_rotation_y = (-90*rad) *side;


		// LEGS
			// Forward
			pose.UFLeg_rotation_x = (25*rad);
			pose.UFLeg_rotation_y = (-30*rad) *side;
			pose.UFLeg_rotation_z = (20*rad) *side;

			pose.LFLeg_rotation_x = (-20*rad);

			// Back
			pose.UBLeg_rotation_x = (110*rad);
			pose.UBLeg_rotation_y = (-20*rad) *side;
			pose.UBLeg_rotation_z = (20*rad) *side;

			pose.LBLeg_rotation_x = (-120*rad);
			pose.LBLeg_rotation_z = (-20*rad) *side;

		//
		pose.body_position_y += 0.2;

		return pose;
	}

	// Kick
	function pose_Kick(Id){
		// pose standards
		var pose = pose_Empty();
		var side = 1;
		if (Id) {side =-1;}
		//---------------

		pose.body_rotation_z = (-30*rad) *side;
		pose.body_rotation_y = (-180*rad) *side;

		pose.head_rotation_z = (20*rad) *side;

		// ARMS
			// Forward
			pose.UFArm_rotation_x = (-40*rad);
			pose.UFArm_rotation_y = (-20*rad) *side;
			pose.UFArm_rotation_z = (-70*rad) *side;

			pose.LFArm_rotation_y = (120*rad) *side;

			// Back
			pose.UBArm_rotation_y = (-20*rad) *side;
			pose.UBArm_rotation_z = (50*rad) *side;
		//

		// LEGS
			// Forward
			pose.UFLeg_rotation_x = (20*rad);
			pose.UFLeg_rotation_y = (-40*rad) *side;
			pose.UFLeg_rotation_z = (40*rad) *side;

			pose.LFLeg_rotation_x = (0*rad);

			// Back
			pose.UBLeg_rotation_z = (-60*rad) *side;
		//

		//
		pose.body_position_y += 0.2;

		return pose;
	}
//-------------