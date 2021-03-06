/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bag.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.3, -1.26, 0.43]} rotation={[0, 0.12, 0]} scale={1.97}>
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['black.002']} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials['emission.001']} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['black.002']} position={[0, 0.99, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/bag.gltf')
