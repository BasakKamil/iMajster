import React,{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import Box from '../../Animate/BOX/Box';
// import Sphere from '../Animate/BOX/Box2';
import Header from './Header';





const More = () => {






  return(
    <div className="info">
      <div className="box" >
     <Header/>
      </div>
       <div className="container">
        <div className="row">
           <div className="col">
             <Canvas className='Canvas'>
               {/* <OrbitControls enableZoom={false} /> */}
               <ambientLight intensity={0.5} />
               <directionalLight position={[-2,5,2]} intensity={1}/>
               <Suspense fallback={null}>
                  <Box/> 
               </Suspense>
             </Canvas>
           </div>
           <div className="col">
            Sklep powstawal przez kilka lat ze wzgledu na moja emigracje z Polski do Holandii.
           </div>
        </div>
        <div className="row">
            <div className="col">
            Foto
            </div>
            <div className="col">
            <Canvas className='Canvas'>
               <ambientLight intensity={0.5} />
               <directionalLight position={[-2,5,2]} intensity={1}/>
               <Suspense fallback={null}>
                   <Box/>  
               </Suspense>
             </Canvas>
            </div>
         
        </div>
        </div>
      </div>
  )


  }



export default More