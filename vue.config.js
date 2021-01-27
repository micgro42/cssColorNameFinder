module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cssColorNameFinder/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global.scss";',
      },
    },
  },
};
