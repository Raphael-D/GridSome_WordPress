<template>
    <header class="l-header header">
        <h1 class="header__logo">
            <g-link to="/">Gridsome WordPress JAMStack</g-link>
        </h1>
        <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">About</g-link>
            <g-link class="nav__link" to="/recruit/">Recruit</g-link>
            <g-link class="nav__link" to="/contact/">Contact</g-link>
            <g-link class="nav__link" to="/news/">News</g-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>