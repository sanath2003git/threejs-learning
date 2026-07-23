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

camera.position.z = 10;

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
  color: 0x0000ff,
});

// =========================
// Meshes
// =========================
const box = new THREE.Mesh(
  new THREE.BoxGeometry(),
  material
);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(),
  material
);

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(),
  material
);

const cylinder = new THREE.Mesh(
  new THREE.CylinderGeometry(),
  material
);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(),
  material
);

const capsule = new THREE.Mesh(
  new THREE.CapsuleGeometry(),
  material
);

const objects = [
  box,
  sphere,
  cone,
  cylinder,
  torus,
  capsule,
];

// =========================
// Positions
// =========================
box.position.x = -7;

sphere.position.x = -4;

cone.position.x = -1;

cylinder.position.x = 2;

torus.position.x = 5;

capsule.position.x = 8;

// =========================
// Add to Scene
// =========================
scene.add(box);
scene.add(sphere);
scene.add(cone);
scene.add(cylinder);
scene.add(torus);
scene.add(capsule);

// =========================
// Animation
// =========================
function animate() {
  requestAnimationFrame(animate);

  objects.forEach((object) => {
  object.rotation.x += 0.01;
  object.rotation.y += 0.01;
});

  renderer.render(scene, camera);
}

animate();