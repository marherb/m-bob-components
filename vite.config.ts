import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            rollupTypes: true,
        }),
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
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime", "antd"],
            output: {
                globals: {
                    react: "react",
                    "react-dom": "react-dom",
                    antd: "antd",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
});
