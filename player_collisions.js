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





function setBoundingBox(player){
	for ( var i=0; i<10; i++ ){
		player[bbox][i].copy( player[box][i].geometry.boundingBox ).applyMatrix4( player[box][i].matrixWorld );
	}
}


function isHit(player, adv, obj){
	var bool = false;
	for (var i=0; i<10; i++){
		if ( player[bbox][obj].intersectsBox(adv[bbox][i]) ) {
			bool = true;
			return bool;
		}
	}
	return bool;
}