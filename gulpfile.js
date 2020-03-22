const isDebug = true;
const rfbuild = require('@rocketfuel-toolchain/build')(
	[
		'./node_modules/@rocketfuel/core/',
		'./'
	],
	'Source/EntryPoint.ts',
	isDebug );

exports.clean = rfbuild.clean;
exports.build = rfbuild.build;

exports.default = rfbuild.build;
