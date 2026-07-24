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
  color: 0x0000ff,
});

// =========================
// Meshes
// =========================
const sphereLow = new THREE.Mesh(
  new THREE.SphereGeometry(2, 4, 2),
  material
);

const sphereMedium = new THREE.Mesh(
  new THREE.SphereGeometry(2, 16, 8),
  material
);

const sphereHigh = new THREE.Mesh(
  new THREE.SphereGeometry(2, 64, 32),
  material
);

const objects = [
  sphereLow,
  sphereMedium,
  sphereHigh,
];

// =========================
// Positions
// =========================
sphereLow.position.x = -5;

sphereMedium.position.x = 0;

sphereHigh.position.x = 5;

// =========================
// Add to Scene
// =========================
scene.add(sphereLow);
scene.add(sphereMedium);
scene.add(sphereHigh);


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