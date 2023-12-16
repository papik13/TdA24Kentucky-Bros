export default {
  // Other configurations...
  plugins: [
    '~/plugins/vuetify'
  ],
  build: {
    transpile: ['vuetify/lib'],
    loaders: {
      stylus: {
        import: ['~vuetify/src/styles/styles.styl']
      }
    }
  },
  css: [
    "layouts/global.css",
  ]
};

