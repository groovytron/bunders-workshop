---
author: "Julien M'Poy"
subtitle: "Manage your web assets"
title: "Bundler Workshop"
---

## Introduction

- What are web application assets?
- What is a bundler?
- Existing bundlers
- Examples
- Usability with symfony

---

## Web Application Assets

---

## Web Application Assets

- CSS/SASS/SCSS/LESS
- Fonts
- Images
- JavaScript
- WebGL scripts

---

## Web Application Assets

- group your JavaScript into one single file
- make your JavaScript executable in the browser
- minify your code
- compress your images
- cache busting and assets versionning

<aside class="notes">
 - single JavaScript file: to limit HTTP requests
 - compress images: minify SVG images
</aside>

---

## What is a bundler ?

It does all of this! And more:

- treeshaking (dead code elimination)
- development server
- Hot Module Replacement (HMR)
- code splitting

---

## Bundlers

---

## [Webpack](https://webpack.js.org/)

![Webpack logo](./images/webpack-logo.svg)

---

## Webpack

- Highly customizable but hard to configure
- Only accepts JavaScript as entrypoint out of the box
- Uses loaders and plugins to transform files (imported from JavaScript)
- Supports treeshaking with `UglifyJSPlugin`
- development server through `webpack-dev-server` plugin
- multiple appoaches for code splitting

---

## [Rollup](https://rollupjs.org/guide/en/)

![Rollup logo](./images/rollup-logo.jpg){height=300px}

---

## Rollup

- Accepts HTML files as entrypoints out of the box
- Uses plugins to transform files
- Supports treeshaking by doing static code analysis
- `rollup-plugin-serve` and `rollup-plugin-livereload` to get a dev server and hot reloading
- switch flags to enable code splitting

---

## [Parcel](https://parceljs.org/)

![Parcel logo](./images/parcel-logo.png){height=300px}

---

## Parcel

- Zero configuration needed in most cases
- **Transforms files in parallel**
- Detects custom configurations automagically (`.babelrc`, `.postcssrc`, etc.)
- Supports tree shaking by doing static code analysis
- Built-in development server with *HMR*
- Code splitting using dynamic import

---

## Examples

1. Simple single page with HMR (starting point of a single page app)
2. Generate `manifest.json` (usable by Symfony or Wordpress)

---

## Challenges

- Add treeshaking and minification to the configurations when webpack is in `production` mode
- Add Font Awesome to the project
- Add TypeScript to the project
- Add VueJS or React to the project
