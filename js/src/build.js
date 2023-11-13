import * as esbuild from 'esbuild'

const isProduction = process.argv.length > 2 && process.argv[2] == '--release';
console.log("isProduction: ", isProduction);

await esbuild.build({
	entryPoints: ['index.ts', 'node.ts'],
	format: 'esm',
	bundle: true,
	splitting: true,
	minify: true,
	sourcemap: !isProduction,
	// outfile: '../out/node.mjs',
	outdir: "../out",
	outExtension: { '.js': '.mjs' },
});