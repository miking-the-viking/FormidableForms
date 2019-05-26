module.exports = {
    outputDir: 'lib',
    lintOnSave: true,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    pluginOptions: {
        storybook: {
            allowedPlugins: ['define']
        }
    }
};
