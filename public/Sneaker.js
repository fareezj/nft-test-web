/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/sneaker.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.83, -1.31, -1.89]} rotation={[0, 0.54, 0]} scale={0.51}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['black.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.emission} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.red} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials.gold} />
      </group>
      <mesh geometry={nodes.Sphere003.geometry} material={materials.emission} position={[2.58, -0.85, 0.73]} rotation={[0, 0.54, 0]} scale={0.05} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials.emission} position={[1.72, -0.84, 1.28]} rotation={[0, 0.54, 0]} scale={0.05} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials.emission} position={[0.69, -0.85, 1.89]} rotation={[0, 0.54, 0]} scale={0.05} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials.emission} position={[-0.17, -0.84, 2.44]} rotation={[0, 0.54, 0]} scale={0.05} />
    </group>
  )
}

useGLTF.preload('/sneaker.gltf')