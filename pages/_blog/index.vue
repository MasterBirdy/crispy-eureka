<template>
    <article>
        <div class="article-container">
            <h1>{{ blogPost.title }}</h1>
            <div class="flex">
                <img :src="blogPost.profilepic" />
                <div class="date-post">
                    <p>By {{ blogPost.author }}</p>
                    <p>{{ blogPost.date | date }}</p>
                </div>
            </div>
            <div v-html="$md.render(blogPost.body)" class="markdown"></div>
        </div>
        <article-sidebar></article-sidebar>
    </article>
</template>

<script>
import ArticleSidebar from "@/components/ArticleSidebar"

export default {
    components: {
        ArticleSidebar
    },
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
    font-size: 3.5rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #111;
}

article {
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

.markdown {
    font-family: "Quicksand", sans-serif;
    letter-spacing: 1px;
}

.markdown >>> h1 {
    font-size: 2.75rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h2 {
    font-size: 2rem;
    font-family: "EB Garamond", serif;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h3 {
    font-size: 1.75rem;
    font-family: "EB Garamond", serif;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h4 {
    font-size: 1.5rem;
    font-family: "EB Garamond", serif;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h5 {
    font-size: 1.3rem;
    font-family: "EB Garamond", serif;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> h6 {
    font-size: 1.25rem;
    font-family: "EB Garamond", serif;
    margin: 0.67rem 0;
    color: #111;
}

.markdown >>> p {
    margin: 0.67rem 0;
    color: #444;
}

.markdown >>> ol,
.markdown >>> ul {
    color: #444;
    margin: 2rem 0 2rem 3rem;
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

@media screen and (max-width: 768px) {
    article {
        padding-right: 0;
        margin-top: 0.75rem;
    }

    .article-container {
        width: 100%;
        max-width: 100%;
        margin-right: 0;
    }

    .markdown >>> pre {
        white-space: pre-line;
    }

    article h1 {
        font-size: 2.3rem;
    }

    .markdown >>> h1 {
        font-size: 2.1rem;
    }

    .markdown >>> h2 {
        font-size: 1.75rem;
    }

    .markdown >>> h3 {
        font-size: 1.5rem;
    }

    .markdown >>> h4 {
        font-size: 1.3rem;
    }

    .markdown >>> h5 {
        font-size: 1.25rem;
    }

    .markdown >>> h6 {
        font-size: 1.2rem;
    }
}
</style>
