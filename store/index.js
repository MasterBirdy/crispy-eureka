export const state = () => ({
    blogPosts: [],
    aboutPage: {}
});

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list;
    },
    setAboutPage(state, context) {
        state.aboutPage = context;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        const files = await require.context(
            "~/assets/content/blog/",
            false,
            /\.json$/
        );
        console.log(files.keys());
        console.log("hi");
        const blogPosts = files.keys().map((key) => {
            const res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit("setBlogPosts", blogPosts);
        const siteFiles = await require.context(
            "~/assets/content/",
            false,
            /\.json$/
        );
        console.log(siteFiles.keys());
        const aboutPageIndex = siteFiles.keys().findIndex((key) => {
            return key.slice(2, -5) === "about-us";
        });
        const aboutRes = files(siteFiles.keys()[aboutPageIndex]);
        await commit("setAboutPage", aboutRes);
    }
};
