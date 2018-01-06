import { configure } from "@storybook/vue";
import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

// import MyButton from "../src/stories/Button.vue";
// Vue.component("my-button", MyButton);

function loadStories() {
  require("../src/component/story.js");
}

configure(loadStories, module);
