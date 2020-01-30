<template>
    <div>
        <header class="container">
            <ul>
                <li>
                    <nuxt-link to="/">
                        <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
                        CatBlog
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                </li>
                <li><nuxt-link to="/" exact>Blog</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
        </header>
        <nav></nav>
        <div class="container">
            <nuxt />
        </div>
    </div>
</template>

<style>
html,
body {
    font-family: "Quicksand", sans-serif;
}

body {
    padding-bottom: 1rem;
    min-height: 100vh;
    background-color: #ffffff;
    background-image: linear-gradient(
            135deg,
            transparent 0%,
            transparent 6%,
            rgba(71, 71, 71, 0.04) 6%,
            rgba(71, 71, 71, 0.04) 22%,
            transparent 22%,
            transparent 100%
        ),
        linear-gradient(
            45deg,
            transparent 0%,
            transparent 20%,
            rgba(71, 71, 71, 0.04) 20%,
            rgba(71, 71, 71, 0.04) 47%,
            transparent 47%,
            transparent 100%
        ),
        linear-gradient(
            135deg,
            transparent 0%,
            transparent 24%,
            rgba(71, 71, 71, 0.04) 24%,
            rgba(71, 71, 71, 0.04) 62%,
            transparent 62%,
            transparent 100%
        ),
        linear-gradient(
            45deg,
            transparent 0%,
            transparent 73%,
            rgba(71, 71, 71, 0.04) 73%,
            rgba(71, 71, 71, 0.04) 75%,
            transparent 75%,
            transparent 100%
        ),
        linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

i {
    color: red;
}

.container {
    width: 95%;
    margin: 0 auto;
}

header.container {
    padding-top: 1.5rem;
    padding-bottom: 0.75rem;
}

header ul {
    display: flex;
    list-style: none;
    align-items: baseline;
    justify-content: space-between;
}

header ul li:first-child {
    font-size: 1.35rem;
    font-weight: 700;
    color: rgb(19, 19, 19);
}

header ul li {
    color: rgb(61, 61, 61);
    font-weight: 500;
    font-size: 0.95rem;
}

nav {
    padding: 0.8rem 0rem;
    background-color: rgba(221, 221, 221, 0.527);
    color: rgba(255, 255, 255, 0);
    content: "";
}

a {
    text-decoration: none;
    color: #111;
}

a:hover,
a:active,
a.nuxt-link-active {
    color: blue;
    font-weight: 600;
}

li:first-child a:hover,
li:first-child a:active,
li:first-child a.nuxt-link-active {
    font-weight: 700;
    color: #111;
}

@media screen and (min-width: 768px) {
    .container {
        max-width: 1400px;
        padding: 0 4rem;
    }

    header ul {
        justify-content: flex-start;
    }

    header ul li {
        margin-right: 3.25rem;
        font-size: 1.1rem;
    }

    header ul li:first-child {
        font-size: 2rem;
    }
}
</style>
