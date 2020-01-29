<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ previewText }}</p>
        <p>{{ imgSource }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        previewText: String,
        imgSource: String
    }
}
</script>

<style scoped></style>
