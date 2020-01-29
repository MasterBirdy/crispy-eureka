<template>
    <section>
        <article-preview
            v-for="post in blogPosts"
            :key="post.title"
            :name="post.title"
            :previewText="post.description"
            :imgSource="post.thumbnail"
        ></article-preview>
    </section>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'

export default {
    components: {
        ArticlePreview
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts
        }
    }
}
</script>

<style scoped>
section {
    width: 300px;
}
</style>
