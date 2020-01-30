<template>
    <section>
        <form>
            <label for="name-input">Name</label>
            <input id="name-input" type="text" name="name-input" />
            <label for="name-input">E-mail</label>
            <input id="email-input" type="email" name="email-input" />
            <label for="comments">Comments</label>
            <textarea id="comments" rows="4"></textarea>
        </form>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
    display: block;
}

section {
    margin-top: 1rem;
    background-color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px #ddd;
    background-color: rgb(253, 253, 253);
}
</style>
