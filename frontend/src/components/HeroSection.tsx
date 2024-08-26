import { useEffect } from 'react';
import * as THREE from 'three';

export const Intro = () => {
  useEffect(() => {
    // Scene with white background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF); // Set background to white

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Hollow circle creation
    const geometry = new THREE.RingGeometry(0.5, 1, 32); // Inner radius, outer radius, number of segments
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000FF, // Circle color (blue in this example)
      side: THREE.DoubleSide, // Render both sides of the ring
    });
    const ring = new THREE.Mesh(geometry, material);
    scene.add(ring);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the ring for visual effect
      ring.rotation.z += 0.01;
      ring.rotation.x += 0.01;
      ring.rotation.y += 0.01;



      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return <></>;
};
