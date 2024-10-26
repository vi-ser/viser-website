<script>
import { ref } from 'vue';
export default {
    name: 'AppNav',


    setup() {
        const isDarkMode = ref(false)

        function toggleDarkMode() {
            isDarkMode.value = !isDarkMode.value;
            document.body.classList.toggle('dark-mode', isDarkMode.value);
        }

        return { isDarkMode, toggleDarkMode }
    }

};
</script>

<template>
    <nav :class="{ 'dark-mode': isDarkMode }" class="d-flex justify-content-between align-items-center">
        <div class="logo">
            <img src="/src/assets/logo.svg" alt="logo viserstudio">
        </div>
        <div class="links-container d-flex align-items-center">
            <div class="links-small d-flex d-lg-none">
                <div class="menu-icon">
                    <input class="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="links d-none d-lg-flex">
                <a href="#" class="nav-link">projects</a>
                <a href="#" class="nav-link">contact me</a>
            </div>

            <div @click="toggleDarkMode" class="dark-mode-btn">

                <!-- sun icon -->

                <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-moon-fill" viewBox="0 0 16 16">
                    <path
                        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-sun-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
            </div>
        </div>
    </nav>

</template>

<style lang="scss">
@use "../styles/variables" as *;
@use "../styles/mixins" as *;


nav {

    img {
        width: 180px;
        user-select: none;

    }



    background-color: $white;
    padding: 1rem 1.5rem;

    .links-container {

        gap: 1rem;


        .menu-icon {
            position: relative;
            width: 2rem;
            height: 2rem;
            cursor: pointer;

            .menu-icon__cheeckbox {
                display: block;
                width: 100%;
                height: 100%;
                position: relative;
                cursor: pointer;
                z-index: 2;
                -webkit-touch-callout: none;
                position: absolute;
                opacity: 0;
            }

            div {
                margin: auto;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                width: 22px;
                height: 12px;
            }

            span {
                position: absolute;
                display: block;
                width: 100%;
                height: 2px;
                background-color: $primaryColor;
                border-radius: 1px;
                transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

                &:first-of-type {
                    top: 0;
                }

                &:last-of-type {
                    bottom: 0;
                }
            }

            &.active,
            .menu-icon__cheeckbox:checked+div {
                span {
                    &:first-of-type {
                        transform: rotate(45deg);
                        top: 5px;
                    }

                    &:last-of-type {
                        transform: rotate(-45deg);
                        bottom: 5px;
                    }
                }
            }

            &.active:hover span:first-of-type,
            &.active:hover span:last-of-type,
            &:hover .menu-icon__cheeckbox:checked+div span:first-of-type,
            &:hover .menu-icon__cheeckbox:checked+div span:last-of-type {
                width: 22px;
            }

            &:hover {

                // no need hover effect on mobile.
                @media (min-width: 1024px) {
                    span:first-of-type {
                        width: 26px;
                    }

                    span:last-of-type {
                        width: 12px;
                    }
                }
            }
        }



        .links {

            gap: 1rem;

            .nav-link {
                @include navLink;
            }
        }

        .dark-mode-btn {

            display: flex;
            align-items: center;
            justify-content: center;


            .bi {
                height: 2.5rem;
                width: 2.5rem;
                color: $primaryColor;
                padding: .25rem;
                line-height: 0;
            }

            border-radius: 50%;
            transition: ease-in-out 0.3s;

            &:hover {
                transform: rotate(360deg);
            }
        }


    }

}


.dark-mode {
    nav {

        img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(79%) saturate(379%) hue-rotate(299deg) brightness(106%) contrast(97%);
        }

        color: $white !important;
        background-color: $midnight;

        .links-container {
            span {
                background-color: $white;
            }
        }

        a {
            color: $white !important;
        }

        .dark-mode-btn {


            .bi {

                fill: $white;

            }

        }

    }

    body {
        color: $white !important;
        background-color: $midnight;
    }
}
</style>
