<template>
    <div>
        <header class="container">
            <ul>
                <li>
                    <nuxt-link to="/">
                        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                        HelpBlog
                    </nuxt-link>
                </li>
                <li>
                    About Us
                </li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </header>
        <nav>
            <div class="container">
                hello world
            </div>
        </nav>
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
    font-size: 1.1rem;
    margin-right: 0.5rem;
}

nav {
    padding: 1rem 0rem;
    background-color: #eee;
    color: rgba(255, 255, 255, 0);
}

a {
    text-decoration: none;
    color: #111;
}

a:hover,
a:active,
a.nuxt-link-active {
    color: blue;
}

li:first-child a:hover,
li:first-child a:active,
li:first-child a.nuxt-link-active {
    color: #111;
}

@media screen and (min-width: 768px) {
    .container {
        max-width: 1400px;
        padding: 0 4rem;
    }

    header ul li {
        margin-right: 3.25rem;
    }
}
</style>
