<script>
import { ref } from 'vue';
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
            store,
            isDarkMode: store.isDarkMode,
        }
    },


    methods: {
        toggleDarkMode() {
            store.toggleDarkMode(); // Call the method in the store
            document.body.classList.toggle('dark-mode', store.state.isDarkMode);
        }
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

            <div @click="toggleDarkMode">
                <label class="switch">
                    <input @click="toggleDarkMode" type="checkbox">
                    <ion-icon class="sun" name="sunny"></ion-icon>
                    <ion-icon class="moon" name="moon"></ion-icon>
                    <span class="toggle"></span>
                </label>
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

        label {
            width: 2rem;
            height: 2rem;
            margin: 0;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        input {
            position: absolute;
            opacity: 0;
        }

        .sun {
            font-size: 1.5em;
            color: $primaryColor;
            z-index: 1;
            transition: 1s ease;
            transition-delay: .3s;
        }

        .moon {
            font-size: 1.5em;
            position: absolute;
            color: $white;
            z-index: 1;
            transform: scale(0);
            transition: 1s ease;
        }

        .toggle {
            position: absolute;
            display: block;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            z-index: 0;
            background-color: $primary100;
        }

        input:checked~.toggle {
            background-color: #121415;
        }

        input:checked~.sun {
            transform: rotate(360deg) scale(0);
            transition-delay: 0s;

        }

        input:checked~.moon {
            transform: scale(1) rotate(360deg);
            transition-delay: .3s;
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


    }

    body {
        color: $white !important;
        background-color: $midnight;
    }
}
</style>
