module.exports = {
  transformer: {
    async getTransformOptions() {
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }
    },
  },
}
