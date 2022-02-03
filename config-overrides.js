/* config-overrides.js */
const { getBabelLoader } = require("customize-cra");

module.exports = function override(config, env) {

    const options = getBabelLoader(config).options;
    const originalPreset = options.presets.find((preset) => preset[0].includes('babel-preset-react-app'));
    if (originalPreset) {
        Object.assign(originalPreset[1], {
            development: process.env.NODE_ENV === 'development',
            importSource: '@welldone-software/why-did-you-render',
        });
    }
    console.log(options.presets)
    return config;
}