<template>
    <article>
        <h1>{{ blogPost.title }}</h1>
        <div class="flex">
            <img :src="blogPost.profilepic" />
            <div class="date-post">
                <p>By {{ blogPost.author }}</p>
                <p>{{ blogPost.date | date }}</p>
            </div>
        </div>
        <div v-html="$md.render(blogPost.body)" class="markdown"></div>
    </article>
</template>

<script>
export default {
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload }
        else
            return {
                blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
            }
    }
}
</script>

<style scoped>
article h1 {
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #111;
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

.markdown >>> h1 {
    font-size: 2.25rem;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h2 {
    font-size: 1.85rem;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> p {
    margin: 0.5rem 0;
    color: #444;
}

.markdown >>> ol {
    color: #444;
    margin: 0.5rem 0 0.5rem 3rem;
}

.markdown >>> li {
    margin-bottom: 0.25rem;
}

.markdown >>> pre {
    margin: 0.5rem 0 0.5rem 2rem;
}

.markdown >>> code {
    word-break: break-all;
}
</style>
