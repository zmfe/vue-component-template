import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs }  from 'storybook-readme';

import readme from '../../docs/welcome.md';
import Welcome from "./Welcome.vue";
import MyButton from "./Button.vue";

storiesOf("Documents", module).add("Document", withReadme(readme,() => ({
  render: h => h(Welcome)
})));
storiesOf("README", module).add("README", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf("Button", module)
  .add("button template", () => ({
    template: '<my-button :rounded="true">round</my-button>'
  }))
  .add("rounded button", () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add("normal button", () => ({
    components: { MyButton },
    template: '<my-button :rounded="false">normal</my-button>'
  }));
