import "./index.css";
import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import BjakShoes from "./3dModels/bjak_shoes";
import BjakBag from "./3dModels/bjak_bag";
import ShoeModel from "./3dModels/shoe";
import ChairModel from "./3dModels/chair";
import TruckModel from "./3dModels/truck";
import TestModel from "./3dModels/test";
import BjakBagARModel from "./3dModels/BjakBagAR";
import BjakHatARModel from "./3dModels/BjakHatAR";
import BjakHatColorPalette from "./ColorPalette/bjakBag";
import { useBetween } from "use-between";
import useShareableState from "./hooks/useShareableState";
import BjakShoesColorPalette from "./ColorPalette/bjakShoes";
import BagModel from "./3dModels/bag";
import GoogleARModel from "./3dModels/googleAR";
import useTextureChange from "./utils/handleTextureChange";
import handleTextureChange from "./utils/handleTextureChange";
import SneakerModel from "./3dModels/sneaker";
import HeelsModel from "./3dModels/heels";
import NeclaceARModel from "./3dModels/neclaceAR";

export default function App() {
  const {
    circularRingColor,
    fabricColor,
    primaryMetalColor,
    topPlateColor,
    setFabricColor,
    setCircularRingColor,
    setPrimaryMetalColor,
    setTopPlateColor,
    baseColor,
    setBaseColor,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    baseInsideColor,
    setBaseInsideColor,
  } = useBetween(useShareableState);

  const [mesh, setMesh] = useState("");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [texture, setTexture] = useState([]);
  const [isModelTextured, setIsModelTextured] = useState(false);
  const [objectType, setObjectType] = useState("");

  function resetStyling() {
    setSole("");
    setMesh("");
    setStripes("");
    setTexture([]);
    setFabricColor("");
    setCircularRingColor("");
    setPrimaryMetalColor("");
    setTopPlateColor("");
    setBaseColor("");
    setPrimaryColor("");
    setSecondaryColor("");
    setBaseInsideColor("");
    setIsModelTextured(false);
  }
  // camera={{ fov: 180 * (Math.PI / 180) }}
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                <spotLight
                  intensity={1}
                  angle={1.0}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                {objectType === "bjakHatModel" ? (
                  <BjakHatARModel
                    isTextured={isModelTextured}
                    customColors={{
                      circularRingColor,
                      fabricColor,
                      primaryMetalColor,
                      topPlateColor,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "neclaceModel" ? (
                  <NeclaceARModel
                    isTextured={isModelTextured}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "goggleModel" ? (
                  <GoogleARModel
                    isTextured={isModelTextured}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "sneakerModel" ? (
                  <SneakerModel
                    isTextured={isModelTextured}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "heelsModel" ? (
                  <HeelsModel
                    isTextured={isModelTextured}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
                {objectType === "bagModel" ? (
                  <BagModel
                    isTextured={isModelTextured}
                    customColors={{
                      mesh: mesh,
                      stripes: stripes,
                      sole: sole,
                      texture: texture,
                    }}
                  />
                ) : null}
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
                      baseColor,
                      primaryColor,
                      secondaryColor,
                      baseInsideColor,
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
          <div className={"main"}>
            <input
              id="bagObject"
              type="button"
              value={"bagModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="heelsObject"
              type="button"
              value={"heelsModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="sneakerObject"
              type="button"
              value={"sneakerModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="neclaceObject"
              type="button"
              value={"neclaceModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="goggleObject"
              type="button"
              value={"goggleModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
            <input
              id="bjakHatObject"
              type="button"
              value={"bjakHatModel"}
              onClick={(e) => {
                setObjectType(e.target.value);
                resetStyling();
              }}
            />
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
          <h1>Fabric Color: {fabricColor}</h1>
          <div className="colors">
            <BjakHatColorPalette
              fabricColor={(color) => {
                setFabricColor(color);
              }}
              circularRingColor={(color) => {
                setCircularRingColor(color);
              }}
              primaryMetalColor={(color) => {
                setPrimaryMetalColor(color);
              }}
              topPlateColor={(color) => {
                setTopPlateColor(color);
              }}
            />
            <BjakShoesColorPalette
              baseColor={(color) => {
                setBaseColor(color);
              }}
              primaryColor={(color) => {
                setPrimaryColor(color);
              }}
              secondaryColor={(color) => {
                setSecondaryColor(color);
              }}
              baseInsideColor={(color) => {
                setBaseInsideColor(color);
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
              <input
                id="textureSwitch"
                type="button"
                value={isModelTextured}
                onClick={(e) => {
                  setIsModelTextured(!isModelTextured);
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
              <input
                type={"button"}
                id="texture"
                name="texture"
                onClick={(e) => {
                  setTexture(handleTextureChange(e.target.value));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
