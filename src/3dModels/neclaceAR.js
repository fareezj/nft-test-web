import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function NeclaceARModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/neclaceAR.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  const isTextured = props.isTextured;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001_RLExtr.geometry}
        material={materials["Material.001"]}
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
        geometry={nodes.Cube001_RLExtr001.geometry}
        material={materials["Material.003"]}
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
        geometry={nodes.BezierCircle.geometry}
        material={materials["Material.001"]}
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
      <mesh geometry={nodes.Cube.geometry} material={materials["Material.001"]}>
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
        geometry={nodes.BezierCircle001.geometry}
        material={materials["Material.001"]}
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
      <mesh geometry={nodes.Cube001.geometry} material={materials.Glass}>
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
        geometry={nodes.BezierCircle002.geometry}
        material={materials["Material.001"]}
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
        geometry={nodes.Sphere.geometry}
        material={materials["Material.004"]}
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
  );
}

useGLTF.preload("/neclaceAR.gltf");
