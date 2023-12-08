import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../Images/een.jpg';

export default function Box(){

const colorMap = useLoader(TextureLoader,texture);

return(
    <mesh rotation={[1,2,3]}>
        <boxBufferGeometry attach="geometry" args={[4,4,4]}/>
        <meshStandardMaterial map={colorMap}/>
        {/* <meshNormalMaterial attach="material" /> */}
    </mesh>

);

}   