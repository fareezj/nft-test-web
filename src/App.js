import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Model({ ...props }) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, "/shoe.glb");

  const { nodes, materials } = useLoader(GLTFLoader, "/shoe.gltf");
  console.log(nodes);
  console.log(materials);
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
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
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"white"}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"red"}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      ></mesh>
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={"red"}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"red"}
      />
      <mesh></mesh>
    </group>
  );
}

function ChairModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, "/SheenChair.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
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

export default function App() {
  const [mesh, setMesh] = useState("#0000FF");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [texture, setTexture] = useState([]);

  function handleTextureChange(type) {
    console.log(type);
    switch (type) {
      case "bricks":
        setTexture([
          "Bricks051_4K_Color.png",
          "Bricks051_4K_Displacement.png",
          "Bricks051_4K_NormalDX.png",
          "Bricks051_4K_Roughness.png",
          "Bricks051_4K_NormalGL.png",
        ]);
        break;
      case "leather":
        setTexture([
          "Leather033C_4K_Color.png",
          "Leather033C_4K_Displacement.png",
          "Leather033C_4K_NormalDX.png",
          "Leather033C_4K_Roughness.png",
          "Leather033C_4K_NormalGL.png",
        ]);
        break;
      case "wood":
        setTexture([
          "Wood067_4K_Color.png",
          "Wood067_4K_Displacement.png",
          "Wood067_4K_NormalDX.png",
          "Wood067_4K_Roughness.png",
          "Wood067_4K_NormalGL.png",
        ]);
        break;
      default:
        setTexture([]);
        break;
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                {/* <BjakModel
                  customColors={{
                    texture: texture,
                  }}
                /> */}
                <Model
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    texture: texture,
                  }}
                />
                {/* <ChairModel
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    texture: texture,
                  }}
                /> */}
                <Model
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    texture: texture,
                  }}
                />
                <OrbitControls
                  enableRotate={true}
                  enablePan={true}
                  enableZoom={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value="#e66465"
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">Mesh</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value="#f6b73c"
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="sole"
                name="sole"
                value="#f6b73c"
                onChange={(e) => setSole(e.target.value)}
              />
              <label for="sole">Sole</label>
            </div>
            <div>
              <select
                id="texture"
                name="texture"
                onChange={(e) => handleTextureChange(e.target.value)}
              >
                <option value="plain">Plain</option>
                <option value="bricks">Bricks</option>
                <option value="leather">Leather</option>
                <option value="wood">Wood</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BjakModel({ ...props }) {
  console.log("Hello");
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, "/BjakShoes.gltf");
  console.log(nodes);
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    props.customColors.texture
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.sock.geometry}
        material={materials.black}
        position={[0, -0.13, 0]}
        scale={0.96}
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
        geometry={nodes.sock002.geometry}
        material={materials.blue}
        position={[0, -0.1, 0.01]}
        scale={[1.09, 1.18, 1.02]}
      ></mesh>
      <mesh
        geometry={nodes.sock003.geometry}
        material={materials.blue}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
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
        geometry={nodes.sock004.geometry}
        material={materials.blue}
        position={[0, -0.07, 0.04]}
        scale={1.01}
      ></mesh>
      <mesh
        geometry={nodes.sock005.geometry}
        material={materials.Material}
        position={[0, -0.13, 0]}
        scale={0.95}
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
        geometry={nodes.sock001.geometry}
        material={materials["Material.001"]}
        position={[0, -0.21, 0.01]}
        rotation={[0.02, 0, 0]}
        scale={0.96}
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
        geometry={nodes.sock006.geometry}
        material={materials.black}
        position={[0.06, -0.1, -0.05]}
        rotation={[-0.03, 0.07, 0]}
        scale={[1.21, 1.3, 1.03]}
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
        geometry={nodes.sock007.geometry}
        material={nodes.sock007.material}
        position={[0, -0.1, 0.01]}
        scale={[1.1, 1.19, 1.02]}
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
        geometry={nodes.sock008.geometry}
        material={nodes.sock008.material}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
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
        geometry={nodes.sock009.geometry}
        material={materials.Material}
        position={[0, -0.16, 0]}
        scale={[0.94, 1.01, 1.01]}
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
        geometry={nodes.sock010.geometry}
        material={materials.black}
        position={[2.63, -0.13, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.96}
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
        geometry={nodes.sock011.geometry}
        material={materials.blue}
        position={[2.63, -0.1, 0.01]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.09, -1.18, -1.02]}
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
        geometry={nodes.sock012.geometry}
        material={materials.blue}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
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
        geometry={nodes.sock013.geometry}
        material={materials.blue}
        position={[2.63, -0.07, 0.04]}
        rotation={[3.14, 0, 0]}
        scale={-1.01}
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
        geometry={nodes.sock014.geometry}
        material={materials.Material}
        position={[2.63, -0.13, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.95}
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
        geometry={nodes.sock015.geometry}
        material={materials["Material.001"]}
        position={[2.63, -0.21, 0.01]}
        rotation={[-3.12, 0, 0]}
        scale={-0.96}
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
        geometry={nodes.sock016.geometry}
        material={materials.black}
        position={[2.57, -0.1, -0.05]}
        rotation={[3.11, 0.07, 0]}
        scale={[-1.21, -1.3, -1.03]}
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
        geometry={nodes.sock017.geometry}
        material={nodes.sock017.material}
        position={[2.63, -0.1, 0.01]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.1, -1.19, -1.02]}
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
        geometry={nodes.sock018.geometry}
        material={nodes.sock018.material}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
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
        geometry={nodes.sock019.geometry}
        material={materials.Material}
        position={[2.63, -0.16, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.94, -1.01, -1.01]}
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

useGLTF.preload("/BjakShoes.gltf");
