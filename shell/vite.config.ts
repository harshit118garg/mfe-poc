import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      exposes: {
        "./shared": path.resolve(__dirname, "src/shared/index.ts"),
        "./store": path.resolve(__dirname, "src/store/index.ts"),
      },
      remotes: {},
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
      dts: false,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@modules': path.resolve(__dirname, "src/modules"),
      '@shared': path.resolve(__dirname, "src/shared"),
      '@pages': path.resolve(__dirname, "src/pages"),
      '@components': path.resolve(__dirname, "src/components")
    }
  },
  server: { port: 5000, cors: true },
  build: { target: "esnext" },
});
