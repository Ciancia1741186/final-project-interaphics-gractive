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





function createBlue(array){
	var blue_fighter = createFighter(0x0000ff,blueId);
	var i = 0;
	array[body] = blue_fighter[i++];
	array[head] = blue_fighter[i++];
	array[UFArm] = blue_fighter[i++];
	array[LFArm] = blue_fighter[i++];
	array[UBArm] = blue_fighter[i++];
	array[LBArm] = blue_fighter[i++];
	array[UFLeg] = blue_fighter[i++];
	array[LFLeg] = blue_fighter[i++];
	array[UBLeg] = blue_fighter[i++];
	array[LBLeg] = blue_fighter[i++];
	//
	var boxes = [];
	var j = 0;
	boxes[body] = blue_fighter[i][j++];
	boxes[head] = blue_fighter[i][j++];
	boxes[UFArm] = blue_fighter[i][j++];
	boxes[LFArm] = blue_fighter[i][j++];
	boxes[UBArm] = blue_fighter[i][j++];
	boxes[LBArm] = blue_fighter[i][j++];
	boxes[UFLeg] = blue_fighter[i][j++];
	boxes[LFLeg] = blue_fighter[i][j++];
	boxes[UBLeg] = blue_fighter[i][j++];
	boxes[LBLeg] = blue_fighter[i][j++];
	//
	array[box] = boxes;
}


function createRed(array){
	var red_fighter = createFighter(0xff0000,redId);
	var i = 0;
	array[body] = red_fighter[i++];
	array[head] = red_fighter[i++];
	array[UBArm] = red_fighter[i++];
	array[LBArm] = red_fighter[i++];
	array[UFArm] = red_fighter[i++];
	array[LFArm] = red_fighter[i++];
	array[UBLeg] = red_fighter[i++];
	array[LBLeg] = red_fighter[i++];
	array[UFLeg] = red_fighter[i++];
	array[LFLeg] = red_fighter[i++];
	//
	var boxes = [];
	var j = 0;
	boxes[body] = red_fighter[i][j++];
	boxes[head] = red_fighter[i][j++];
	boxes[UBArm] = red_fighter[i][j++];
	boxes[LBArm] = red_fighter[i][j++];
	boxes[UFArm] = red_fighter[i][j++];
	boxes[LFArm] = red_fighter[i][j++];
	boxes[UBLeg] = red_fighter[i][j++];
	boxes[LBLeg] = red_fighter[i][j++];
	boxes[UFLeg] = red_fighter[i][j++];
	boxes[LFLeg] = red_fighter[i][j++];
	//
	array[box] = boxes;
}


function createFighter(clr,Id){
	if (Id){
		var tunicFront = new THREE.TextureLoader().load('Textures/blue_front.jpg');
		var tunic = new THREE.TextureLoader().load('Textures/blue_tunic.jpg');
	}
	else {
		var tunicFront = new THREE.TextureLoader().load('Textures/red_front.jpg');
		var tunic = new THREE.TextureLoader().load('Textures/red_tunic.jpg');
	}

	//---Body
	var geometry = new THREE.BoxGeometry(2, 4.5, 2);
	var body_materials = [
		new THREE.MeshLambertMaterial( { map: tunic, side: THREE.DoubleSide } ), // Right
		new THREE.MeshLambertMaterial( { map: tunic, side: THREE.DoubleSide } ), // Left
		new THREE.MeshLambertMaterial( { color: clr, side: THREE.DoubleSide } ), // Top
		new THREE.MeshLambertMaterial( { color: clr, side: THREE.DoubleSide } ), // Botton
		new THREE.MeshLambertMaterial( { map: tunic, side: THREE.DoubleSide } ),      // Back
		new THREE.MeshLambertMaterial( { map: tunicFront, side: THREE.DoubleSide } ), // Front
	];
	var material = new THREE.MeshFaceMaterial( body_materials ); 
	var body = new THREE.Mesh(geometry, material);
	body.geometry.computeBoundingBox();

	scene.add(body);
	
	//---Head
	geometry = new THREE.SphereGeometry(1);
	material = new THREE.MeshLambertMaterial ( {color: 0xffc0cb}) //pink
	var head = new THREE.Mesh(geometry, material);
	head.geometry.computeBoundingBox();

	var head_pivot = new THREE.Object3D();

	body.add(head_pivot);
	head_pivot.add(head);
	
	//---Forearm Left
	geometry = new THREE.BoxGeometry( 2, 0.75, 0.75);
	material = new THREE.MeshLambertMaterial( {color: clr} ); 
	var forearmLeft = new THREE.Mesh(geometry, material);
	forearmLeft.geometry.computeBoundingBox();

    var ULA_pivot = new THREE.Object3D();

    body.add(ULA_pivot);
    ULA_pivot.add(forearmLeft);
	
	//---Arm Left
	geometry = new THREE.BoxGeometry(2, 0.5, 0.5);
	material = new THREE.MeshLambertMaterial ( {color: 0xffc0cb}) //pink
	var armLeft = new THREE.Mesh(geometry, material);
	armLeft.geometry.computeBoundingBox();

    var LLA_pivot = new THREE.Object3D();

    forearmLeft.add(LLA_pivot);
    LLA_pivot.add(armLeft);
    
	//---Forearm Right
	geometry = new THREE.BoxGeometry( 2, 0.75, 0.75);
	material = new THREE.MeshLambertMaterial( {color: clr} ); 
	var forearmRight = new THREE.Mesh(geometry, material);
	forearmRight.geometry.computeBoundingBox();

    var URA_pivot = new THREE.Object3D();

    body.add(URA_pivot);
    URA_pivot.add(forearmRight);

	//---Arm Right
	geometry = new THREE.BoxGeometry(2, 0.5, 0.5);
	material = new THREE.MeshLambertMaterial ( {color: 0xffc0cb}) //pink
	var armRight = new THREE.Mesh(geometry, material);
	armRight.geometry.computeBoundingBox();

    var LRA_pivot= new THREE.Object3D();

    forearmRight.add(LRA_pivot);
    LRA_pivot.add(armRight);
    
	//---UpperLeg Left
	geometry = new THREE.BoxGeometry( 0.75, 2.5, 0.75);
	material = new THREE.MeshLambertMaterial( {color: clr} ); 
	var upperLegLeft = new THREE.Mesh(geometry, material);
	upperLegLeft.geometry.computeBoundingBox();

    var ULL_pivot = new THREE.Object3D();

    body.add(ULL_pivot);
    ULL_pivot.add(upperLegLeft);
    
	//---LowerLeg Left
	geometry = new THREE.BoxGeometry(0.5, 3.0, 0.5);
	material = new THREE.MeshLambertMaterial ( {color: 0xffc0cb}) //pink
	var lowerLegLeft = new THREE.Mesh(geometry, material);
	lowerLegLeft.geometry.computeBoundingBox();

    var LLL_pivot = new THREE.Object3D();

    upperLegLeft.add(LLL_pivot);
    LLL_pivot.add(lowerLegLeft);

	//---UpperLeg Right
	geometry = new THREE.BoxGeometry( 0.75, 2.5, 0.75);
    material = new THREE.MeshLambertMaterial( {color: clr} );  
	var upperLegRight = new THREE.Mesh(geometry, material);
	upperLegRight.geometry.computeBoundingBox();

    var URL_pivot = new THREE.Object3D();
    
	body.add(URL_pivot);
    URL_pivot.add(upperLegRight);

	//---LowerLeg Right
	geometry = new THREE.BoxGeometry(0.5, 3.0, 0.5);
	material = new THREE.MeshLambertMaterial ( {color: 0xffc0cb}) //pink
	var lowerLegRight = new THREE.Mesh(geometry,material);
	lowerLegRight.geometry.computeBoundingBox();

    var LRL_pivot = new THREE.Object3D();

	upperLegRight.add(LRL_pivot);
    LRL_pivot.add(lowerLegRight);
	

	//Set Proper position
	head.position.y = (head.geometry.parameters.radius);
	head_pivot.position.y = (body.geometry.parameters.height / 2);
    

    forearmLeft.position.x = (ULA_pivot.position.x) - (forearmLeft.geometry.parameters.width / 2);
	ULA_pivot.position.x = -(body.geometry.parameters.width / 2);
    ULA_pivot.position.y = (body.geometry.parameters.height / 2) - (forearmLeft.geometry.parameters.height / 2);
	
	armLeft.position.x = (LLA_pivot.position.x) - (armLeft.geometry.parameters.width / 2);
	LLA_pivot.position.x = -(forearmLeft.geometry.parameters.width / 2);


	forearmRight.position.x = (URA_pivot.position.x) + (forearmRight.geometry.parameters.width / 2);
	URA_pivot.position.x = (body.geometry.parameters.width / 2);
    URA_pivot.position.y = (body.geometry.parameters.height / 2) - (forearmRight.geometry.parameters.height / 2);

	armRight.position.x = (LRA_pivot.position.x) + (armRight.geometry.parameters.width / 2);
	LRA_pivot.position.x = (forearmRight.geometry.parameters.width / 2);


    upperLegLeft.position.y = (ULL_pivot.position.y) - (upperLegLeft.geometry.parameters.height / 2);
	ULL_pivot.position.x = ((body.geometry.parameters.width / 2)-(upperLegLeft.geometry.parameters.width / 2))*(-1);
    ULL_pivot.position.y = (body.geometry.parameters.height / 2)*(-1);

    lowerLegLeft.position.y = (LLL_pivot.position.y) - (lowerLegLeft.geometry.parameters.height / 2);
	LLL_pivot.position.y = -(upperLegLeft.geometry.parameters.height / 2);


    upperLegRight.position.y = (URL_pivot.position.y) - (upperLegRight.geometry.parameters.height / 2);
    URL_pivot.position.x = ((body.geometry.parameters.width / 2)-(upperLegRight.geometry.parameters.width / 2));
    URL_pivot.position.y = (body.geometry.parameters.height / 2)*(-1);
	
	lowerLegRight.position.y = (LRL_pivot.position.y) - (lowerLegRight.geometry.parameters.height / 2);
	LRL_pivot.position.y = -(upperLegRight.geometry.parameters.height / 2);


	//
	var boxes = [body, head, forearmLeft, armLeft, forearmRight, armLeft, upperLegLeft, lowerLegLeft, upperLegRight, lowerLegRight];
	
	return [body, head_pivot, ULA_pivot, LLA_pivot, URA_pivot, LRA_pivot, ULL_pivot, LLL_pivot, URL_pivot, LRL_pivot, boxes];
}