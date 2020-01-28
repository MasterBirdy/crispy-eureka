<template>
    <div>
        <header class="container">
            <ul>
                <li>HelpBlog</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </header>
        <nav>
            <div class="container">hello world</div>
        </nav>
        <nuxt />
    </div>
</template>

<style>
html,
body {
    font-family: 'Quicksand', sans-serif;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.container {
    width: 95%;
    margin: 0 auto;
}

header.container {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
}

header ul {
    display: flex;
    list-style: none;
    align-items: baseline;
}

ul li:first-child {
    font-size: 2rem;
    font-weight: 700;
    color: rgb(19, 19, 19);
}

header ul li {
    color: rgb(61, 61, 61);
    font-weight: 500;
    font-size: 1rem;
    margin-right: 3.25rem;
}

nav {
    padding: 1rem 0rem;
    background-color: #eee;
    color: rgba(255, 255, 255, 0);
}

@media screen and (min-width: 768px) {
    .container {
        max-width: 1400px;
        padding: 0 1rem;
    }
}
</style>
