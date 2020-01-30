<template>
    <div class="grid">
        <nuxt-link
            v-for="post in blogPosts"
            :key="post.title"
            :to="'/' + post.slug"
            tag="article"
        >
            <div
                :style="{ backgroundImage: `url(${post.thumbnail})` }"
                class="preview-image"
            ></div>
            <div class="flex">
                <h2>
                    {{ post.title }}
                </h2>
                <p>{{ post.author }}</p>
            </div>
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
        };
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts;
        }
    }
};
</script>

<style scoped>
.grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;
}

article {
    display: flex;
    flex-direction: column;
    box-shadow: 1px 3px 6px 0px #ccc;
}

.grid article {
    padding: 1rem;
    text-align: center;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
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

@media screen and (max-width: 1300px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 6rem;
    }
}

@media screen and (max-width: 1000px) {
    .grid {
        grid-column-gap: 1rem;
    }
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
