<template>
    <nuxt-link :to="'/' + slug" class="main" tag="div">
        <div
            :style="{ backgroundImage: `url(${imgSource})` }"
            class="background-picture"
        ></div>
        <p>{{ name }}</p>
        <p>{{ previewText }}</p>
        <p>{{ imgSource }}</p>
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
}
</script>

<style scoped>
.background-picture {
    width: 100%;
    height: 200px;
    background-size: cover;
}

.main {
    cursor: pointer;
}
</style>
