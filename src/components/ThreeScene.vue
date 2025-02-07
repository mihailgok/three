<template>
    <div>
      <div ref="container" class="three-container"></div>
      <div class="controls">
        <label>Ширина двери: <input type="range" v-model="doorWidth" min="1" max="5" step="0.1" /></label>
        <label>Высота двери: <input type="range" v-model="doorHeight" min="2" max="6" step="0.1" /></label>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
  const container = ref<HTMLDivElement | null>(null);
  const doorWidth = ref(2);
  const doorHeight = ref(4);
  
  let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
  let controls: OrbitControls, door: THREE.Mesh;
  
  onMounted(() => {
    if (!container.value) return;
  
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);
  
    camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
    camera.position.set(5, 5, 10);
  
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    renderer.shadowMap.enabled = true;
    container.value.appendChild(renderer.domElement);
  
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    light.castShadow = true;
    scene.add(light);
  
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);
  
    const cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
    cube.position.set(-3, 1, 0);
    cube.castShadow = true;
    scene.add(cube);
  
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial({ color: 0x0000ff }));
    sphere.position.set(3, 1, 0);
    sphere.castShadow = true;
    scene.add(sphere);
  
    const createDoor = () => {
      if (door) scene.remove(door);
      const doorGeometry = new THREE.BoxGeometry(doorWidth.value, doorHeight.value, 0.2);
      const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, metalness: 0.1, roughness: 0.8 });
      door = new THREE.Mesh(doorGeometry, doorMaterial);
      door.position.set(0, doorHeight.value / 2, -2);
      door.castShadow = true;
      scene.add(door);
    };
  
    createDoor();
  
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
  
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  
    watch([doorWidth, doorHeight], createDoor);
  });
  </script>
  
  <style>
  .three-container {
    width: 100%;
    height: 500px;
  }
  .controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
  </style>
  