// src/components/HeroParallaxDemo.tsx
import * as React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export const HeroParallaxDemo = () => {
  return <HeroParallax products={products} />;
};

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  // Add more products here
];
