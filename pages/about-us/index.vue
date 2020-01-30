<template>
    <section class="about-us">
        <h1>{{ aboutUs.title }}</h1>
        <markdown-component :body="aboutUs.intro"></markdown-component>
    </section>
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
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px #ddd;
    background-color: #fff;
}

h1 {
    font-size: 3rem;
    font-family: "EB Garamond", serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #111;
}

@media screen and (max-width: 768px) {
    .about-us h1 {
        font-size: 2.3rem;
    }
}
</style>
