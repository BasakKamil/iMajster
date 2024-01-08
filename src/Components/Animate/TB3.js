import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import smoke from '../../images/smoke1.png';
import stars from '../../images/star.png';
import Foto1 from '../../images/logawww/oskar.jpg';
import Foto2 from '../../images/logawww/slub.jpg';
import Foto3 from '../../images/logawww/amman.jpg';
import Foto4 from '../../images/logawww/soprano.png';


export function ThreeBack(props){
    
        
        let foto = [Foto1, Foto2, Foto3, Foto4];
      
       
        let [state,setState] = useState({
            // Express Login- backend
            apiResponse : "",
            loggedIn : false ,
            products: [],
            editMode : false,
            cloudParticles : [] 
        });
        let scene = new THREE.Scene();
        let cloudGeo = new THREE.PlaneBufferGeometry(400,400);
        let flash = new THREE.PointLight(0x07416E, 30, 500 , 1.7);
        let ambient = new THREE.AmbientLight(0xEBEBEB);
        let directionalLight = new THREE.DirectionalLight(0x394CC9);
        let width = window.innerWidth;
        let height = window.innerHeight;
        let camera = new THREE.PerspectiveCamera(70,width /height,1,1000 );
  

    const kamil = (texture) => {
       
        let cloudGeo = new THREE.PlaneBufferGeometry(400,400);
        let cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });
        
        for(let p=0; p<60; p++){
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);         
            cloud.position.set(
                Math.random()*1600 - 1000,
                400,
                Math.random() *1400 - 1400
            ); 
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random()*2*Math.PI;
            cloud.material.opacity = 0.75;
            state.cloudParticles.push(cloud);
            scene.add(cloud); 
        }   
    }

    const nieuwe = () => {

        let geomet = new THREE.PlaneGeometry(400,100);
        let mater = new THREE.MeshToonMaterial({
            color: 0x0b7703
        } ); 
        let capsule = new THREE.Mesh(this.geomet, this.mater ); 
        capsule.position.set( 100,200,-200 );
        // this.cloudParticles.push(this.capsule);
        scene.add( capsule );
    }

    const stars = (texture) =>{

        // Utworze sobie geometrie do schowania gwiazd
        let starGeo = new THREE.PlaneBufferGeometry();
        for(let i=0;i<6000; i++){
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            starGeo.vertices.push(star);
        }
        
        let starMaterial = new THREE.MeshLambertMaterial({
            color: 0x4B4E55,
            size: 0.7,
            map: texture
        });
        let stars = new THREE.Mesh(starGeo, starMaterial);
        scene.add(stars);

    }
    const pushBox = (cloud,cloudGeo,cloudMaterial) => {
        
        for(let j=0; j<this.foto.length;j++){
           
            const start = window.innerWidth / this.foto.length;
            cloudGeo[j] = new THREE.BoxGeometry(8,8,8);
            cloudMaterial[j] = [
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide})
              ];
            box[j] = new THREE.Mesh(cloudGeo[j], cloudMaterial[j]);
            box[j].position.set(-start/15 +j*20,30,-30);
            addCube(box[j]);
        } 
    }
    
   const box = (Foto1) =>{

        // Utworze sobie schemat do boxów stron wwww
        // this.box = new THREE.BoxGeometry( 7, 7, 7 );
        const boxmaterial =  [
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide})
          ];
        let boxown= new THREE.Mesh(box, boxmaterial);
        boxown.position.set(0,30,-30);
        addCube(boxown); 

    }

    const addCube = (cube) => {
        scene.add(cube);
      }

    const superSztorm = (scene) => {
      
        camera.position.set(0,0,0);

        camera.rotation.x = 1.12;
        camera.rotation.y = -0.12;
       
        // DODAJE ŚWIATŁA
       
        directionalLight.position.set(0,0,1);
        
        flash.position.set(200.300,100);
        scene.add(flash);
        scene.add(directionalLight);
        scene.add(ambient);
    
        let renderer = new WebGLRenderer();
        renderer.setSize(width,height);
        scene.fog = new THREE.FogExp2(0x2DACEC,0.001);
        renderer.setClearColor(scene.fog.color);
        mount.appendChild(renderer.domElement);
    
        let loader = new THREE.TextureLoader().load(smoke);
        let loader2 = new THREE.TextureLoader().load(stars);
        kamil(loader);
        // this.pushBox();
        // this.nieuwe();
        animate();
     
       
    
    
    }

    useEffect(()=>{
        superSztorm();
    },[]);
   
    const animate = () =>{
        let frameId = window.requestAnimationFrame(animate);
        renderer.render(scene, camera);

    //    for(let j=0;j<this.foto.length;j++){
    //       this.box[j].rotation.z += 0.01;
    //    }
        state.cloudParticles.forEach(p=>{
            p.rotation.z -=0.01; 
        });

        if(Math.random() > 0.93 || flash.power > 100){
            if(flash.power < 100)
                flash.position.set(
                    Math.random()*400,
                    300 + Math.random() * 200,
                    100 
                );
                flash.power = 50 + Math.random() * 500;
    
            
        }
      }
   
    
        return (
            <div className="ThreeBack" ref={mount => mount = mount}></div>
        )
    
}

export default ThreeBack