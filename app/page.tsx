'use client';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import fragmentShader from '../shaders/fragmentShader.glsl';
import vertexShader from '../shaders/vertexShader.glsl';

export default function Home() {

  if (window === undefined) {
    return <div>loading</div>
  }


  useEffect(() => {

    // let x: any;
    // let y: any;
    // window.addEventListener('mousemove', (event) => {
    //   x = event.x;
    //   y = event.y;
    //   console.log(x, y);
    //   console.log(material.uniforms);
    // });

    const scene = new THREE.Scene();
    const geomety = new THREE.SphereGeometry(1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000  , wireframe: true });
    // const material = new THREE.ShaderMaterial({
    //   vertexShader: vertexShader,
    //   fragmentShader: fragmentShader,
    // });
    scene.background = new THREE.Color(0x808080);


    // interface UTime {
    //   value: () => number;
    // }

    // const u_time: UTime = {
    //   value: () => {
    //     return Math.random();
    //   }
    // };


    // material.uniforms = {
    //   u_time: { value: 1.0 },
    //   u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    //   u_mouse: { value: new THREE.Vector2() },
    // };

    const Mesh = new THREE.Mesh(
      geomety,
      material
    );

    scene.add(Mesh);
    // cubeMesh.position.y = 2;

    // const cubeMesh2 = new THREE.Mesh(
    //   cubeGeometry,
    //   cubeMaterial
    // );
    // cubeMesh2.position.x = 2;

    // const cubeMesh3 = new THREE.Mesh(
    //   cubeGeometry,
    //   cubeMaterial
    // );
    // cubeMesh3.position.x = -2;

    // const group = new THREE.Group();
    // group.add(cubeMesh);
    // group.add(cubeMesh2);
    // group.add(cubeMesh3);

    // const axishelper = new THREE.AxesHelper(5);

    // scene.add(axishelper);
    // scene.add(group);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 30);
    camera.position.z = 5;
    scene.add(camera);

    const canvas = document.getElementById('canvas');
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas as HTMLCanvasElement,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);


      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      // controls.autoRotate = true;

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
      let prevtime = 0;
      const clock = new THREE.Clock();


      const animate = () => {

        // const currenttime = clock.getElapsedTime();
        // const delta = currenttime - prevtime;
        // prevtime = currenttime;
        // Mesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;

        renderer.setSize(window.innerWidth, window.innerHeight);

        // material.uniforms.u_time.value = u_time.value();
        // console.log(material.uniforms);
        // material.uniforms.u_mouse.value.set(x / window.innerWidth, y / window.innerHeight);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        controls.update();

      }
      animate();
      renderer.render(scene, camera);
    }


  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
}
