import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function GoogleARModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/googleAR.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  const isTextured = props.isTextured;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere003_RLExtr.geometry}
        material={materials["Material.002"]}
        scale={1.01}
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
        geometry={nodes.Sphere003_RLExtr001.geometry}
        material={materials["Material.002"]}
        scale={1.01}
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
        geometry={nodes.Sphere003_RLExtr002.geometry}
        material={materials["Material.002"]}
        scale={1.01}
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
        geometry={nodes.Sphere002_RLExtr.geometry}
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
      <mesh
        geometry={nodes.Sphere002_RLExtr001.geometry}
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
      <mesh
        geometry={nodes.Sphere001.geometry}
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
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.006"]}
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
        geometry={nodes.Sphere003.geometry}
        material={materials["Material.007"]}
        scale={1.01}
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
        geometry={nodes.Sphere004.geometry}
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
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.005"]}
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
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.005"]}
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
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.005"]}
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
        geometry={nodes.Sphere009.geometry}
        material={materials["Material.005"]}
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
        geometry={nodes.Sphere010.geometry}
        material={materials["Material.005"]}
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
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.004"]}
        position={[-0.01, 0, 0.01]}
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
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.004"]}
        position={[-0.01, -0.54, 0.29]}
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
        geometry={nodes.NurbsPath.geometry}
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

useGLTF.preload("/googleAR.gltf");
