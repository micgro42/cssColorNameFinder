module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/cssColorNames/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/styles/global.scss";',
            },
        },
    },
};
