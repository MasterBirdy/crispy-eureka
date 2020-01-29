<template>
    <div class="grid">
        <nuxt-link
            v-for="post in blogPosts"
            :key="post.title"
            :to="'/' + post.slug"
            tag="section"
        >
            <img :src="post.thumbnail" />
            <h2>{{ post.title }}</h2>
            <p>{{ post.author }}</p>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    head() {
        return {
            script: [
                {
                    src:
                        'https://identity.netlify.com/v1/netlify-identity-widget.js'
                }
            ]
        }
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts
        }
    }
}
</script>

<style scoped>
.grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.grid section {
    padding: 1rem;
    text-align: center;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
    cursor: pointer;
}

h2 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}

p {
    color: rgb(56, 56, 56);
    font-size: 0.95rem;
}

img {
    width: 100%;
}
</style>
