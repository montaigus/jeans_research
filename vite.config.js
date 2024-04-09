import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./src",
  base: "http://jeans-research.vercel.app/",
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsxInject: `import React from 'react'`,
  },
});
