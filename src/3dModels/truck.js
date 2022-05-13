import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Truck({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/truck.glb");
  // const { actions } = useAnimations(animations, group);
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Yup2Zup" rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <group name="Cesium_Milk_Truck">
            <mesh
              name="Cesium_Milk_Truck_1"
              geometry={nodes.Cesium_Milk_Truck_1.geometry}
              material={materials.truck}
              material-color={props.customColors.stripes}
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
              name="Cesium_Milk_Truck_2"
              geometry={nodes.Cesium_Milk_Truck_2.geometry}
              material={materials.glass}
              material-color={props.customColors.mesh}
            />
            <mesh
              name="Cesium_Milk_Truck_3"
              geometry={nodes.Cesium_Milk_Truck_3.geometry}
              material={materials.window_trim}
              material-color={props.customColors.stripes}
            />
            <group name="Node" position={[1.43, 0, -0.43]}>
              <mesh
                name="Wheels"
                geometry={nodes.Wheels.geometry}
                material={materials.wheels}
                rotation={[0, -0.18, 0]}
                material-color={props.customColors.sole}
              />
            </group>
            <group name="Node001" position={[-1.35, 0, -0.43]}>
              <mesh
                name="Wheels001"
                geometry={nodes.Wheels001.geometry}
                material={materials.wheels}
                rotation={[0, -0.18, 0]}
                material-color={props.customColors.mesh}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
