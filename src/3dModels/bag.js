import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function BagModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/1-bag.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.3, -1.26, 0.43]}
        rotation={[0, 0.12, 0]}
        scale={1.97}
      >
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials["black.002"]}
        >
          <meshStandardMaterial
            displacementScale={0.001}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials["emission.001"]}
        >
          <meshStandardMaterial
            displacementScale={0.001}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
          />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["black.002"]}
        position={[0, 0.99, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshStandardMaterial
          displacementScale={0.001}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/1-bag.gltf");
