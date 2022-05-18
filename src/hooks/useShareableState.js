import React, { useState } from "react";
import { useBetween } from "use-between";

export default function useShareableState() {
  //Bjak Hat
  const [circularRingColor, setCircularRingColor] = useState("");
  const [fabricColor, setFabricColor] = useState("");
  const [primaryMetalColor, setPrimaryMetalColor] = useState("");
  const [topPlateColor, setTopPlateColor] = useState("");

  // Bjak Shoes
  const [baseColor, setBaseColor] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [baseInsideColor, setBaseInsideColor] = useState("");

  return {
    setFabricColor,
    setCircularRingColor,
    setPrimaryMetalColor,
    setTopPlateColor,
    circularRingColor,
    fabricColor,
    primaryMetalColor,
    topPlateColor,
    baseColor,
    setBaseColor,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    baseInsideColor,
    setBaseInsideColor,
  };
}
