import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import BjakShoes from "./3dModels/bjak_shoes";
import BjakBag from "./3dModels/bjak_bag";
import ShoeModel from "./3dModels/shoe";
import ChairModel from "./3dModels/chair";
import TruckModel from "./3dModels/truck";

export default function App() {
  const [mesh, setMesh] = useState("");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [texture, setTexture] = useState([]);
  const [objectType, setObjectType] = useState("");
  let meshColor = "";

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
                {/* <ObjectRender type={objectType} meshColor={mesh} /> */}
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
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
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
                  enableRotate={true}
                  enablePan={true}
                  enableZoom={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <div>
            <input
              id="object"
              type="button"
              value={"shoesModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="object"
              type="button"
              value={"chairModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="object"
              type="button"
              value={"bjakShoesModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="object"
              type="button"
              value={"bjakBagModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="object"
              type="button"
              value={"truckModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <form>
                {/* <input
                  type="text"
                  id="mesh"
                  name="mesh"
                  value={mesh}
                  onChange={(e) => {
                    // // meshChange(e.target.value);
                    // console.log(e.target.value);
                    // meshColor = e.target.value;
                  }}
                />
                <label for="mesh">Mesh</label> */}
                <input
                  id="buttonMesh"
                  type="button"
                  value={""}
                  onClick={(e) => {
                    console.log("COLOR SHOULD CHANGE");
                    console.log(e.target.value);
                    setMesh(e.target.value);
                  }}
                />
              </form>
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
