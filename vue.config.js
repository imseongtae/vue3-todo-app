module.exports = {
	devServer: {
		overlay: false,
	},
	configureWebpack: {
		module: {
			rules: [
				{
					// test: /\.css$/,
					test: /\.(s*)css$/,
					use: ['postcss-loader'],
				},
			],
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
          @import "@/scss/_ui.scss";
        `,
			},
		},
	},
};
