<template>
    <div class="grid">
        <nuxt-link
            v-for="post in blogPosts"
            :key="post.title"
            :to="'/' + post.slug"
            tag="section"
        >
            <div
                :style="{ backgroundImage: `url(${post.thumbnail})` }"
                class="preview-image"
            ></div>

            <h2>
                {{ post.title }}
            </h2>
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
                        "https://identity.netlify.com/v1/netlify-identity-widget.js"
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
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;
}

.grid section {
    padding: 1rem;
    text-align: center;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
    cursor: pointer;
}

.preview-image {
    background-size: cover;
    width: 100%;
    height: 300px;
}

h2 {
    font-size: 1.7rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}

p {
    color: rgb(56, 56, 56);
    font-size: 1rem;
}

img {
    width: 100%;
}

@media screen and (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }

    h2 {
        font-size: 1.5rem;
        margin-top: 0.33rem;
        margin-bottom: 0.33rem;
    }
}
</style>
