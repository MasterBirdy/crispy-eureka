<template>
    <section>
        <div class="article-container">
            <h1>{{ blogPost.title }}</h1>
            <div class="flex">
                <img :src="blogPost.profilepic" />
                <div class="date-post">
                    <p>By {{ blogPost.author }}</p>
                    <p>{{ blogPost.date | date }}</p>
                </div>
            </div>
            <!-- <div v-html="$md.render(blogPost.body)" class="markdown"></div> -->
            <markdown-component :body="blogPost.body"></markdown-component>
        </div>
        <article-sidebar></article-sidebar>
    </section>
</template>

<script>
import ArticleSidebar from "@/components/ArticleSidebar";
import MarkdownComponent from "@/components/MarkdownComponent";

export default {
    components: {
        ArticleSidebar,
        MarkdownComponent
    },
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload };
        else
            return {
                blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
            };
    }
};
</script>

<style scoped>
section h1 {
    font-size: 3.5rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #111;
}

section {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
}

.article-container {
    max-width: 800px;
    margin-right: 4rem;
}

.flex {
    display: flex;
    align-items: center;
    color: #555;
    font-size: 0.9rem;
}

.date-post {
    display: flex;
    position: relative;
    height: 48px;
    margin-left: 0.5rem;
    flex-direction: column;
    justify-content: space-around;
}

img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
}

@media screen and (max-width: 768px) {
    section {
        padding-right: 0;
        margin-top: 0.75rem;
    }

    .article-container {
        width: 100%;
        max-width: 100%;
        margin-right: 0;
    }

    section h1 {
        font-size: 2.3rem;
    }
}
</style>
