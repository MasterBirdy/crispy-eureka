<template>
    <aside>
        <h1>Articles</h1>
        <article-preview
            v-for="post in blogPosts"
            :key="post.title"
            :name="post.title"
            :slug="post.slug"
            :previewText="post.description"
            :imgSource="post.thumbnail"
        ></article-preview>
    </aside>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview";

export default {
    components: {
        ArticlePreview
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts;
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 2.25rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 0.5rem;
}
aside {
    width: 350px;
    background-color: #eee;
    border-radius: 5px;
    padding: 0.5rem 1rem;
}

@media screen and (max-width: 1350px) {
    section {
        display: none;
    }
}
</style>
