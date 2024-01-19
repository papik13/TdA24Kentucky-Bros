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
  serverMiddleware: [
    { path: '/api', handler: '~/api/app.js' },
  ],
  css: [
    '~/assets/css/fonts.css'
  ]
};

