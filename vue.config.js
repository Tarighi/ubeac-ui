const webpackFilesPath = "./core/webpack";
const VuePagePlugin = require(webpackFilesPath + "/plugins/page-plugin");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loader: "string-replace-loader",
          options: {
            multiple: [
              { search: "<page ", replace: "<template " },
              { search: "</page>", replace: "</template>" },
              { search: ' model="', replace: ' v-model="' },
              { search: ' model=\'', replace: ' v-model=\'' },
            ],
          },
        },
      ],
    },
    plugins: [new VuePagePlugin()],
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};
