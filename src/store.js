import { reactive } from "vue";

const state = reactive({
  isDarkMode: false,
});

export const store = {
  state,
  toggleDarkMode() {
    state.isDarkMode = !state.isDarkMode;
  },
};
