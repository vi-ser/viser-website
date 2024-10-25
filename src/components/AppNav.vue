<script>
export default {
    name: 'AppNav',
};
</script>

<template>
    <nav>
        <div class="logo">
            <img src="/public/logo.svg" alt="logo viserstudio">
        </div>
    </nav>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

nav {
    padding: 24px;
}

img {
    width: 180px;
}
</style>
