<template> <div v-html="$md.render(body)" class="markdown"></div></template>

<script>
export default {
    name: "MarkdownComponent",
    props: {
        body: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
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
    .markdown >>> pre {
        white-space: pre-line;
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
