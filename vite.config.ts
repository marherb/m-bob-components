import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            rollupTypes: true,
        }),
        peerDepsExternal(),
        // visualizer({
        //     emitFile: true,
        //     filename: "stats.html",
        // }),
    ],
    build: {
        outDir: "lib",
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "MBobComponents",
            fileName: "m-bob-components",
        },
    },
});
