import React,{Component} from 'react';
import * as THREE from "three";
import Foto1 from './oskar.jpg';



class BOX1 extends Component{
    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.addCube = this.addCube.bind(this);
        this.initializeCamera = this.initializeCamera.bind(this);
        
    
      }
    
     
    componentDidMount() {
  
      
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(20, width / height, 0.7, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(0x000000);
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        
        this.mount.appendChild(this.renderer.domElement);
        // this.initializeOrbits();
        this.initializeCamera();
 
        const lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    
        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );
    
        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
     
   

const geometry = new THREE.BoxGeometry( 20, 20, 20 );

const material = [
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide})
];
// const material = new THREE.MeshBasicMaterial({color: 0xffffff});
this.cube = new THREE.Mesh( geometry, material );
this.cube.position.z = 0;
this.scene.add( this.cube );
this.animate();  
        
      }
    
    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        this.mount.removeChild(this.renderer.domElement);
      }
  
    initializeCamera() {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 80;
      }
    animate() {
        this.frameId = window.requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
        this.cube.rotation.y += 0.01;
       
      }
    addCube(cube) {
        this.scene.add(cube);
      }
 
   

  
    render() {
        return (
          <a href="http://prevohouse.com/" className="col-3"  rel="noopener noreferrer" >
            <div
              id="Box"
              className="KamilaStopka"
              ref={mount => {
                this.mount = mount;
              }}
            />
   
          </a>
        );
      }
}
export default BOX1;









