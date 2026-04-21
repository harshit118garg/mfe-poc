import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        shell: {
          type: "module",
          name: "shell",
          entry: `http://localhost:5000/${isDev ? "" : "assets/"}remoteEntry.js`,
        },
      },
      exposes: {
        "./TodoApp": "./src/components/Todo.tsx",
        "./Intimation": "./src/modules/intimation/intimation.tsx"
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
      dts: false,
    }),
  ],
  server: {
    port: 5001,
    cors: true,
    // proxy: {
    //   "/remoteEntry.js": {
    //     target: "http://localhost:5000",
    //     changeOrigin: true,
    //   },
    // },
  },
  build: { target: "esnext" },
});
