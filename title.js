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

	//Renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth *(0.990), window.innerHeight*(0.968));

	//Place Scene
    document.body.appendChild(renderer.domElement);
    



    var play_quote = document.createElement('div');
	winWidth = window.innerWidth
	winHeight = window.innerHeight
    play_quote.style.cssText = 'display: flex; align-items: center; position: absolute; text-align:center; left: '+ String(winWidth/2.7) +'px; top: '+ String(winHeight/1.7) +'px; font-size: 45px; color:black';
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

















