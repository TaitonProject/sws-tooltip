export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/tooltip.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'tooltip',
  globals: {
    '@angular/core': 'ng.core',
  }
}