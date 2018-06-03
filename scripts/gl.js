window.addEventListener('load',init);

  const width = 360;
  const length = 360;
  
function init(){


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

  const geometry = new THREE.BoxGeometry(400,400,400);
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry,material);
  scene.add(box);

  tick();

  function tick(){
    box.rotation.y +=0.01;
    box.rotation.z +=0.01;
    box.rotation.x +=0.01;

    rend.render(scene,camera);

    requestAnimationFrame(tick);
  }
}
