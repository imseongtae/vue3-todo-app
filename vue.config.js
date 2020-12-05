module.exports = {
	devServer: {
		overlay: false,
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
