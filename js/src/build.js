import * as esbuild from 'esbuild'

const isProduction = process.argv.length > 2 && process.argv[2] == '--release';
console.log("isProduction: ", isProduction);

const options = {
	entryPoints: ['node-single.ts', 'node-module.ts'],
	format: 'esm',
	bundle: true,
	splitting: true,
	minify: isProduction,
	sourcemap: !isProduction,
	// outfile: '../out/node.mjs',
	outdir: "../out",
	outExtension: { '.js': '.mjs' },
};

if (isProduction) {
	await esbuild.build(options);
} else {
	let ctx = await esbuild.context(options);
	await ctx.watch()
	console.log('watching...')
}