<script>
import { computed } from 'vue';
import { store } from '../store';

export default {
    name: 'AppSlider',

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
    <div :class="{ 'dark-mode': isDarkMode }" class="slider-animation d-flex">
        <div class="slider" :class="{ 'dark-mode': isDarkMode }">
            <p class="service">logo design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">brand identity design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">graphic design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">ux/ui design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">web development</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
        </div>
        <div class="slider" :class="{ 'dark-mode': isDarkMode }">
            <p class="service">logo design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">brand identity design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">graphic design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">ux/ui design</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
            <p class="service">web development</p>
            <img src="/src/assets/viser-symbol.svg" alt="">
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.slider-animation {

    background-color: $midnight;
    gap: 0;
    overflow-x: hidden;

    .slider {
        background-color: $midnight;
        padding: .5rem 1rem;
        display: flex;
        gap: 2.5rem;
        user-select: none;

        .service {
            text-transform: uppercase;
            color: $white;
            font-size: 2rem;
            font-family: 'Kurdis Extrawide Semibold', sans-serif;
            margin-bottom: 0;
            white-space: nowrap;
        }

        img {
            width: 1.5rem;
        }

        animation: service-slide 100s infinite linear;

        @keyframes service-slide {
            from {
                transform: translateX(0);
            }

            to {
                transform: translateX(-100%);
            }
        }
    }
}

.dark-mode .slider-animation {
    background-color: $white;


    .slider {
        background-color: $white;

        .service {
            color: $midnight;
        }

        img {
            filter: invert(100%);
        }
    }
}
</style>
