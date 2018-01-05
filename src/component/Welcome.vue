<template>
  <div class="main">
# Vue-component-template

## About
a quick environment for developing Vue components using storybook,circle-ci,vue-cli,postcss,jest

## Getting Started
Clone this repo. Use it as a template for creating and testing your own Vue components

## Build

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Storybook

```bash
# run storybook
npm run storybook
http://localhost:9001/
  </div>
</template>

<script>
export default {
  name: 'welcome',

  props: {
    showApp: {
      type: Function,
      default: () => console.log('Welcome to vue-component-template')
    }
  }
}
</script>

<style>
.main {
  margin: 15px;
  max-width: 600px;
  line-height: 1.4;
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,
  sans-serif;
}

.logo {
  width: 200px;
}

.link {
  color: #1474f3;
  text-decoration: none;
  border-bottom: 1px solid #1474f3;
  padding-bottom: 2px;
}

.code {
  font-size: 15px;
  font-weight: 600;
  padding: 2px 5px;
  border: 1px solid #eae9e9;
  border-radius: 4px;
  background-color: #f3f2f2;
  color: #3a3a3a;
}

.note {
  opacity: 0.5;
}
</style>
