import { useState } from "react";

export default function handleTextureChange(type) {
  console.log(type);
  switch (type) {
    case "":
      return [
        "Terrazzo018_1K_Color.jpg",
        "Terrazzo018_1K_Displacement.jpg",
        "Terrazzo018_1K_NormalDX.jpg",
        "Terrazzo018_1K_Roughness.jpg",
        "Terrazzo018_1K_NormalGL.jpg",
      ];

    case "leather":
      return [
        "Leather033C_4K_Color.png",
        "Leather033C_4K_Displacement.png",
        "Leather033C_4K_NormalDX.png",
        "Leather033C_4K_Roughness.png",
        "Leather033C_4K_NormalGL.png",
      ];

    case "terrazzo":
      return [
        "Terrazzo018_1K_Color.jpg",
        "Terrazzo018_1K_Displacement.jpg",
        "Terrazzo018_1K_NormalDX.jpg",
        "Terrazzo018_1K_Roughness.jpg",
        "Terrazzo018_1K_NormalGL.jpg",
      ];

    case "fabric":
      return [
        "Fabric050_2K_Color.png",
        "Fabric050_2K_Displacement.png",
        "Fabric050_2K_NormalDX.png",
        "Fabric050_2K_Roughness.png",
        "Fabric050_2K_NormalGL.png",
      ];

    case "tiles":
      return [
        "Tiles076_2K_Color.png",
        "Tiles076_2K_Displacement.png",
        "Tiles076_2K_NormalDX.png",
        "Tiles076_2K_Roughness.png",
        "Tiles076_2K_NormalGL.png",
      ];

    case "tape":
      return [
        "Tape001_2K_Color.png",
        "Tape001_2K_Displacement.png",
        "Tape001_2K_NormalDX.png",
        "Tape001_2K_Roughness.png",
        "Tape001_2K_NormalGL.png",
      ];

    default:
      return [];
  }
}
