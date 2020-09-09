var scene, camera, renderer;
function init() {
	
	
	//Scene
	scene = new THREE.Scene();

	// BackGround
	var texture = new THREE.TextureLoader().load( "Textures/title-screen.jpg" );
	scene.background = texture;
	//scene.background = new THREE.Color( 0xffffff );   //!!!!!!

	// Camera
	camera = new THREE.OrthographicCamera(window.innerWidth/-50, window.innerWidth/ 50, window.innerHeight/ 50, window.innerHeight/ -50, 1, 1000 );
	camera.position.z = 10;

	// Audio
	var listener = new THREE.AudioListener();
	camera.add( listener );

	var sound = new THREE.Audio( listener );

	var audioLoader = new THREE.AudioLoader();
	audioLoader.load( 'Music/title_music.mp3', function( buffer ) {
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
    



    var play_quote = document.createElement('div');
    play_quote.style.cssText = 'position: absolute; left: 490px; top: 400px; font-size: 45px; color:black';
    document.body.appendChild(play_quote);
    play_quote.innerHTML = "press SPACE to fight!";
}


function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

init();
animate();




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
    var play= 32; //space

    if (key.keyCode == play){
        window.location.href='main.html';
    }
}
//-----------------------

















