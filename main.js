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






var blue= [];
var red = [];

blue[bbox] = [];
red[bbox] = [];

for(var i = 0; i<10; i++) {
	blue[bbox][i] = new THREE.Box3();
	red[bbox][i] = new THREE.Box3();
}

var hp_bar = [];


var scene, camera, renderer;
function init() {
	
	
	//Scene
	scene = new THREE.Scene();

	// BackGround
	var texture = new THREE.TextureLoader().load( "dojo.jpg" );
	scene.background = texture;

	// Camera
	camera = new THREE.OrthographicCamera(window.innerWidth/-50, window.innerWidth/ 50, window.innerHeight/ 50, window.innerHeight/ -50, 1, 1000 );
	camera.position.z = 10;

	// Light
	var light = new THREE.AmbientLight(0xffffff, 0.3);
	scene.add(light);

	var PLight = new THREE.PointLight(0xffffff, 10, 25);
	scene.add(PLight);

	PLight.position.y +=5;
	PLight.position.z +=2;

	// Audio
	var listener = new THREE.AudioListener();
	camera.add( listener );

	var sound = new THREE.Audio( listener );

	var audioLoader = new THREE.AudioLoader();
	audioLoader.load( 'musica.mp3', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setLoop( true );
		sound.setVolume( 0.5 );
		sound.play();
	});

	//Renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth *(0.990), window.innerHeight*(0.968));

	//Place Scene
	document.body.appendChild(renderer.domElement);



	//-----------------FIGHTERS----------------//
	//Create Blue
	createBlue(blue);
	setAnimation(blue,blueId);

	reset(blue,blueId);
	//

	//Create Red
	createRed(red);
	setAnimation(red,redId);

	reset(red,redId);
	//

	red[body].position.x = -6;
	blue[body].position.x = 6;

	set_Pose(red,pose_Bend(redId));
	set_Pose(blue,pose_Bend(blueId));
	//-----------------------------------------//



	//----------------HP BARS------------------//
	// Red HP
	var red_bar = document.createElement('div');
	red_bar.style.cssText = 'position: absolute; left: 2%; top: 5%; background-color: red; width: 45%; height: 40px; transform: rotate(180deg)';
	document.body.appendChild(red_bar);
	
	hp_bar[redId] = document.createElement('div');
	hp_bar[redId].style.cssText = 'position: absolute; background-color: yellow; width: 100%; height: 40px';
	red_bar.appendChild(hp_bar[redId]);

	// Blue HP
	var blue_bar = document.createElement('div');
	blue_bar.style.cssText = 'position: absolute; right: 2%; top: 5%; background-color: red; width: 45%; height: 40px';
	document.body.appendChild(blue_bar);

	hp_bar[blueId] = document.createElement('div');
	hp_bar[blueId].style.cssText = 'position: absolute; background-color: yellow; width: 100%; height: 40px';
	blue_bar.appendChild(hp_bar[blueId]);
	//-----------------------------------------//
}




function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	renderer.render(scene, camera);

	update(blue,blueId,red,redId); //update blue status against red
	update(red,redId,blue,blueId); //update red status against blue

	update_Hp(hp_bar);
}





//---Window Resize---
function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth *(0.988), window.innerHeight*(0.968));
}

window.addEventListener('resize', onWindowResize, false);
//-------------------


//---KeyBoard Checking---
window.addEventListener("keypress", keyHandler, false);

function keyHandler(key){
	player_Handler(key,blue,blueId);
	player_Handler(key,red,redId);
}
//-----------------------





var word1;
var word2;

function hitbox_Attempt(){
	//
	word1 = document.createElement('div');
	word1.style.cssText = 'position: absolute; left: 30px; top: 75px; font-size: 50px; color:white';
	document.body.appendChild(word1);
	word1.innerHTML = 'Red';	
	//
	word2 = document.createElement('div');
	word2.style.cssText = 'position: absolute; right: 30px; top: 75px; font-size: 50px; color:white';
	document.body.appendChild(word2);
	word2.innerHTML = 'Blue';	
}

init();
hitbox_Attempt();
animate();













