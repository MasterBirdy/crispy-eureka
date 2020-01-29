<template>
    <nuxt-link :to="'/' + slug" class="main" tag="div">
        <div
            :style="{ backgroundImage: `url(${imgSource})` }"
            class="background-picture"
        ></div>
        <h2>{{ name }}</h2>
        <p>{{ previewText }}</p>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        name: String,
        previewText: String,
        imgSource: String,
        slug: String
    }
};
</script>

<style scoped>
.background-picture {
    width: 100%;
    height: 200px;
    background-size: cover;
}

.main {
    cursor: pointer;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.45rem;
    font-family: "EB Garamond", serif;
}

p {
    font-size: 0.95rem;
    font-family: "Quicksand", sans-serif;
}
</style>
