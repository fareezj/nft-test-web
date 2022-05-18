import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function BjakShoes({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/BjakShoes.glb");
  const { baseColor, primaryColor, secondaryColor, baseInsideColor } =
    props.customColors;
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Base 1 */}
      <mesh
        geometry={nodes.sock.geometry}
        material={materials.black}
        position={[0, -0.13, 0]}
        scale={0.96}
        material-color={baseColor}
      ></mesh>
      {/* Combined Top Part */}
      <mesh
        geometry={nodes.sock002.geometry}
        material={materials.blue}
        position={[0, -0.1, 0.01]}
        scale={[1.09, 1.18, 1.02]}
        material-color={primaryColor}
      ></mesh>
      {/* Combined Top Part */}
      <mesh
        geometry={nodes.sock003.geometry}
        material={materials.blue}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
        material-color={primaryColor}
      ></mesh>
      {/* Combined Top Part */}
      <mesh
        geometry={nodes.sock004.geometry}
        material={materials.blue}
        position={[0, -0.07, 0.04]}
        scale={1.01}
        material-color={primaryColor}
      ></mesh>
      {/* Base Top */}
      <mesh
        geometry={nodes.sock005.geometry}
        material={materials.Material}
        position={[0, -0.13, 0]}
        scale={0.95}
        material-color={secondaryColor}
      ></mesh>
      <mesh
        geometry={nodes.sock001.geometry}
        material={materials["Material.001"]}
        position={[0, -0.21, 0.01]}
        rotation={[0.02, 0, 0]}
        scale={0.96}
      ></mesh>
      {/* Base Inside */}
      <mesh
        geometry={nodes.sock006.geometry}
        material={materials.black}
        position={[0.06, -0.1, -0.05]}
        rotation={[-0.03, 0.07, 0]}
        scale={[1.21, 1.3, 1.03]}
        material-color={baseInsideColor}
      ></mesh>
      <mesh
        geometry={nodes.sock007.geometry}
        material={nodes.sock007.material}
        position={[0, -0.1, 0.01]}
        scale={[1.1, 1.19, 1.02]}
      ></mesh>
      <mesh
        geometry={nodes.sock008.geometry}
        material={nodes.sock008.material}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
      ></mesh>

      {/* Right Shoe */}
      <mesh
        geometry={nodes.sock009.geometry}
        material={materials.Material}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
      ></mesh>
      <mesh
        geometry={nodes.sock010.geometry}
        material={materials.black}
        position={[2.63, -0.13, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.96}
      ></mesh>
      <mesh
        geometry={nodes.sock011.geometry}
        material={materials.blue}
        position={[2.63, -0.1, 0.01]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.09, -1.18, -1.02]}
      ></mesh>
      <mesh
        geometry={nodes.sock012.geometry}
        material={materials.blue}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
      ></mesh>
      <mesh
        geometry={nodes.sock013.geometry}
        material={materials.blue}
        position={[2.63, -0.07, 0.04]}
        rotation={[3.14, 0, 0]}
        scale={-1.01}
      ></mesh>
      <mesh
        geometry={nodes.sock014.geometry}
        material={materials.Material}
        position={[2.63, -0.13, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.95}
      ></mesh>
      <mesh
        geometry={nodes.sock015.geometry}
        material={materials["Material.001"]}
        position={[2.63, -0.21, 0.01]}
        rotation={[-3.12, 0, 0]}
        scale={-0.96}
      ></mesh>
      <mesh
        geometry={nodes.sock016.geometry}
        material={materials.black}
        position={[2.57, -0.1, -0.05]}
        rotation={[3.11, 0.07, 0]}
        scale={[-1.21, -1.3, -1.03]}
      ></mesh>
      <mesh
        geometry={nodes.sock017.geometry}
        material={nodes.sock017.material}
        position={[2.63, -0.1, 0.01]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.1, -1.19, -1.02]}
      ></mesh>
      <mesh
        geometry={nodes.sock018.geometry}
        material={nodes.sock018.material}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
      ></mesh>
      <mesh
        geometry={nodes.sock019.geometry}
        material={materials.Material}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/BjakShoes.gltf");
