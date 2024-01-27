import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

//NEW
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.js",
		output: [
			{
				file: packageJson.main,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			// NEW
			peerDepsExternal(),

			resolve(),
			commonjs(),

			// NEW
			terser(),
		],
	},
	{
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
		external: [/\.css$/],
	},
];
