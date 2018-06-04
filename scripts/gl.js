window.addEventListener('load',init);

  const width = 360;
  const length = 360;
  
function init(){

	let rot = 0;
  const radian = rot * Math.PI / 180;
  const width = 960;
  const height = 960;

  const rend = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
  });
  rend.setPixelRatio(window.devicePixelRatio);
  rend.setSize(width,height);
  
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45,width/height);
  camera.position.set(0,0,1000);

  const geometry = new THREE.SphereGeometry(300,30,30);
  const material = new THREE.MeshStandardMaterial({
	map:new THREE.TextureLoader().load('../images/sun.jpg'),
	side:THREE.DoubleSide,
	});
  const earth = new THREE.Mesh(geometry,material);
  scene.add(earth);
	const Light =new THREE.DirectionalLight(0xffffff);
	Light.position.set(1,1,1);
	scene.add(Light);


  tick();

  function tick(){
    earth.rotation.y +=0.01;
    earth.rotation.z +=0.01;
    earth.rotation.x +=0.01;

    rend.render(scene,camera);

    requestAnimationFrame(tick);
  }
}
