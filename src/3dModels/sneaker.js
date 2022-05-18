import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function SneakerModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/2-sneaker.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  const isTextured = props.isTextured;
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.83, -1.31, -1.89]}
        rotation={[0, 0.54, 0]}
        scale={0.51}
      >
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials["black.001"]}
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
          geometry={nodes.Plane_2.geometry}
          material={materials.emission}
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
          geometry={nodes.Plane_3.geometry}
          material={materials.red}
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
          geometry={nodes.Plane_4.geometry}
          material={materials.gold}
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
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials.emission}
        position={[2.58, -0.85, 0.73]}
        rotation={[0, 0.54, 0]}
        scale={0.05}
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
        material={materials.emission}
        position={[1.72, -0.84, 1.28]}
        rotation={[0, 0.54, 0]}
        scale={0.05}
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
        material={materials.emission}
        position={[0.69, -0.85, 1.89]}
        rotation={[0, 0.54, 0]}
        scale={0.05}
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
        material={materials.emission}
        position={[-0.17, -0.84, 2.44]}
        rotation={[0, 0.54, 0]}
        scale={0.05}
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

useGLTF.preload("2-sneaker.glb");
