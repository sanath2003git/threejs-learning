import "./style.css";
import * as THREE from "three";

// =========================
// Scene
// =========================
const scene = new THREE.Scene();

// =========================
// Camera
// =========================
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 9;

// =========================
// Renderer
// =========================
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// =========================
// Lights
// =========================
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

directionalLight.position.set(2, 2, 5);

scene.add(directionalLight);

// =========================
// Material
// =========================
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

// =========================
// Meshes
// =========================
const sphere1 = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 8),
  material
);

const sphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 16, 8),
  material
);

const sphere3 = new THREE.Mesh(
  new THREE.SphereGeometry(2, 16, 8),
  material
);

const nose = new THREE.Mesh(
  new THREE.ConeGeometry(0.1,0.1),
  new THREE.MeshStandardMaterial({
  color: 0xff6a45,})
);

const eye1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1,0.1,0.1,32),
  new THREE.MeshStandardMaterial({
  color: 0x000000,})
);

const eye2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1,0.1,0.1,32),
  new THREE.MeshStandardMaterial({
  color: 0x000000,})
);

const objects = [
  sphere1,
  sphere2,
  sphere3,
  nose,
  eye1,
  eye2,
];

// =========================
// Positions
// =========================
sphere1.position.y = 2;

sphere2.position.y = 0;

sphere3.position.y = -2;

nose.position.y = 1.7;
nose.position.z = 1;
nose.rotation.x = 1.7;

eye1.position.y = 2;
eye2.position.y = 2;
eye1.position.z = 1;
eye2.position.z = 1;
eye1.position.x = 0.3;
eye2.position.x = -0.3;
eye1.rotation.x = 1.7;
eye2.rotation.x = 1.7;
// =========================
// Add to Scene
// =========================
scene.add(sphere1);
scene.add(sphere2);
scene.add(sphere3);
scene.add(nose);
scene.add(eye1);
scene.add(eye2);



// =========================
// Animation
// =========================
function animate() {
  requestAnimationFrame(animate);

//   objects.forEach((object) => {
//   object.rotation.x += 0.01;
//   object.rotation.y += 0.01;
// });

  renderer.render(scene, camera);
}

animate();