import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function ChairModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/SheenChair.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  return (
    <group ref={group} {...props} dispose={null} scale={5}>
      <mesh
        geometry={nodes.SheenChair_fabric.geometry}
        material={materials["fabric Mystere Mango Velvet"]}
        material-color={props.customColors.mesh}
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
        geometry={nodes.SheenChair_wood.geometry}
        material={materials["wood Brown"]}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.SheenChair_metal.geometry}
        material={materials.metal}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.SheenChair_label.geometry}
        material={materials.label}
        position={[0, 0.24, 0.06]}
        rotation={[-0.09, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/SheenChair.gltf");
