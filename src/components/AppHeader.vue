<script>
import { computed } from 'vue';
import { store } from '../store';

export default {
    name: 'AppHeader',

    setup() {
        // Use computed to make isDarkMode reactive
        const isDarkMode = computed(() => store.state.isDarkMode);

        return {
            isDarkMode,
        };
    },
};
</script>

<template>
    <div class="background">
        <div class="container">
            <h1 class="text-uppercase mt-5">Hello World</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;


.background {
    background-color: $white;

    .container {
        h1 {
            font-family: 'Kurdis Extracondensed Black', sans-serif;
            color: $primaryColor;
            font-size: 6rem;
        }
    }

}
</style>
