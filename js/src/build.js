import * as esbuild from 'esbuild'

const isProduction = process.argv.length > 2 && process.argv[2] == '--release';
console.log("isProduction: ", isProduction);

await esbuild.build({
	entryPoints: ['index.mts'],
	format: 'esm',
	bundle: true,
	minify: true,
	sourcemap: !isProduction,
	outfile: '../out/index.mjs',
	// outdir: "../out",
});