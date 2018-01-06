import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs }  from 'storybook-readme';

import readme from '../../README.md';
import Welcome from "./Welcome.vue";
import Component from "./component.vue";
import ComponentMd from "./component.md";

storiesOf("README", module).add("README", withDocs(readme,() => ({
  render: h => h(Welcome)
})));
// storiesOf("README", module).add("README", () => ({
//   components: { Welcome },
//   template: '<welcome :showApp="action" />',
//   methods: { action: linkTo("Button") }
// }));

storiesOf("Component", module).add("componnet", withReadme(ComponentMd,() => ({
  render: h => h(Component)
})));
