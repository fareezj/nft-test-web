import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function HeelsModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/heels.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  const isTextured = props.isTextured;
  const { baseColor, primaryColor, secondaryColor, baseInsideColor } =
    props.customColors;
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-1.29, -1.19, -1.63]}
        rotation={[-Math.PI, -0.72, 0]}
        scale={[0.2, 0.19, 0.2]}
      >
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials.black}
          material-color={"green"}
        >
          {isTextured ? (
            <meshStandardMaterial
              displacementScale={0.001}
              map={colorMap}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              aoMap={aoMap}
            />
          ) : null}
        </mesh>
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.001"]}
          material-color={"green"}
        >
          {isTextured ? (
            <meshStandardMaterial
              displacementScale={0.001}
              map={colorMap}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              aoMap={aoMap}
            />
          ) : null}
        </mesh>
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials.grey}
          material-color={"green"}
        >
          {isTextured ? (
            <meshStandardMaterial
              displacementScale={0.001}
              map={colorMap}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              aoMap={aoMap}
            />
          ) : null}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/heels.gltf");
