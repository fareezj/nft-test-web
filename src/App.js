import "./index.css";
import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import BjakShoes from "./3dModels/bjak_shoes";
import BjakBag from "./3dModels/bjak_bag";
import ShoeModel from "./3dModels/shoe";
import ChairModel from "./3dModels/chair";
import TruckModel from "./3dModels/truck";
import { Vector2 } from "three";
import TestModel from "./3dModels/test";

export default function App() {
  const [mesh, setMesh] = useState("");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [texture, setTexture] = useState([]);
  const [objectType, setObjectType] = useState("");
  // Bjak Bag
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [color6, setColor6] = useState("");
  const [color7, setColor7] = useState("");
  const [color8, setColor8] = useState("");
  const [color9, setColor9] = useState("");

  function handleTextureChange(type) {
    console.log(type);
    switch (type) {
      case "bricks":
        setTexture([
          "Terrazzo018_1K_Color.jpg",
          "Terrazzo018_1K_Displacement.jpg",
          "Terrazzo018_1K_NormalDX.jpg",
          "Terrazzo018_1K_Roughness.jpg",
          "Terrazzo018_1K_NormalGL.jpg",
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

  function resetStyling() {
    setSole("");
    setMesh("");
    setStripes("");
    setTexture([]);
  }
  // camera={{ fov: 180 * (Math.PI / 180) }}
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
                {/* <TestModel
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    texture: texture,
                  }}
                /> */}
                {objectType === "shoesModel" ? (
                  <ShoeModel
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "chairModel" ? (
                  <ChairModel
                    position={[0.1, -0.8, 0.1]}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "bjakShoesModel" ? (
                  <BjakShoes
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "bjakBagModel" ? (
                  <BjakBag
                    position={[0.1, -0.8, 0.1]}
                    customColors={{
                      color1: color1,
                      color2: color2,
                      color3: color3,
                      color4: color4,
                      color5: color5,
                      color6: color6,
                      color7: color7,
                      color8: color8,
                      color9: color9,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "truckModel" ? (
                  <TruckModel
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}

                <OrbitControls
                  minDistance={2}
                  maxDistance={15}
                  enableRotate={true}
                  enablePan={true}
                  enableZoom={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <div>
            <input
              id="shoeObject"
              type="button"
              value={"shoesModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="chairObject"
              type="button"
              value={"chairModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="bjakShoeObject"
              type="button"
              value={"bjakShoesModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="bjakBagObject"
              type="button"
              value={"bjakBagModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="truckObject"
              type="button"
              value={"truckModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
          </div>
          <h2>Color chooser</h2>
          <h3>Bjak Bag</h3>
          <div className="colors">
            <input
              id="color1"
              type="button"
              value={""}
              onClick={(e) => {
                setColor1(e.target.value);
              }}
            />
            <input
              id="color2"
              type="button"
              value={""}
              onClick={(e) => {
                setColor2(e.target.value);
              }}
            />

            <div>
              <input
                id="buttonMesh"
                type="button"
                value={""}
                onClick={(e) => {
                  setMesh(e.target.value);
                }}
              />
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
