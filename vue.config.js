module.exports = {
  productionSourceMap: false,
  pwa: {
    name: 'GDG Ado-Ekiti Web App',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
