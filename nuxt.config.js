export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap"
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=EB+Garamond:400,600,700|Roboto&display=swap"
            },
            {
                rel: "stylesheet",
                href:
                    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "green" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~plugins/date-filter.js"],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        "@nuxtjs/eslint-module"
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/markdownit"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // eslint-disable-next-line prettier/prettier
        extend(config, ctx) {}
    },
    generate: {
        routes() {
            const fs = require("fs");
            return fs.readdirSync("./assets/content/blog").map((file) => {
                return {
                    route: `/blog/${file.slice(2, -5)}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/blog/${file}`)
                };
            });
        }
    },
    markdownit: {
        injected: true
    }
};
