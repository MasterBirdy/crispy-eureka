<template>
    <div class="about-us">
        <h1>{{ aboutUs.title }}</h1>
        <markdown-component :body="aboutUs.intro"></markdown-component>
    </div>
</template>

<script>
import MarkdownComponent from "@/components/MarkdownComponent";

export default {
    components: {
        MarkdownComponent
    },
    computed: {
        aboutUs() {
            return this.$store.state.aboutPage;
        }
    }
};
</script>

<style scoped>
.about-us {
    margin-bottom: 1rem;
}

h1 {
    font-size: 3rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #111;
}

img {
    max-width: 100%;
}
</style>
