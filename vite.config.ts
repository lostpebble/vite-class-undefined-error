import { defineConfig } from "vite";
import { resolve } from "path";
// import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import nodePolyfills from "rollup-plugin-polyfill-node";
// import rollupNodePolyFill from "rollup-plugin-node-polyfills";
// import nodePolyfills from "rollup-plugin-polyfill-node";
// import viteSentry from "vite-plugin-sentry";
// import pluginRewriteAll from "vite-plugin-rewrite-all";
// import mkcert from "vite-plugin-mkcert";
// import removeConsole from "vite-plugin-remove-console";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    server: {
      https: false,
      port: 3000,
      fs: {
        allow: ["../"],
      },
    },
    // envDir: "./env_web",
    plugins: [],
    build: {
      // minify: false,
      // target: "es2015",
      outDir: "dist_web",
      sourcemap: true,
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          nodePolyfills({
            include: ["node_modules/**/*.js", "../../node_modules/**/*.js"],
          }),
        ],
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        process: "rollup-plugin-node-polyfills/polyfills/process-es6",
        buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
        events: "rollup-plugin-node-polyfills/polyfills/events",
        util: "rollup-plugin-node-polyfills/polyfills/util",
        sys: "util",
        stream: "rollup-plugin-node-polyfills/polyfills/stream",
        _stream_duplex: "rollup-plugin-node-polyfills/polyfills/readable-stream/duplex",
        _stream_passthrough: "rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough",
        _stream_readable: "rollup-plugin-node-polyfills/polyfills/readable-stream/readable",
        _stream_writable: "rollup-plugin-node-polyfills/polyfills/readable-stream/writable",
        _stream_transform: "rollup-plugin-node-polyfills/polyfills/readable-stream/transform",
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: "globalThis",
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
  };
});
