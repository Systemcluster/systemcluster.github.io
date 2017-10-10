---
layout: post
title: Electron Project with TypeScript, Webpack, and Electron-Builder
subtitle: Part 1 - Setting up the structure and hot-reload
comments: true
categories: Electron Node JavaScript
excerpt: >
  
---

### Webpack configuration

#### Bundling

We have a few options when bundling the project:

1. Bundle all external dependencies. 

  `require` calls will be handled by webpacks generated code, `node_modules` don't have to be included in the final build.
  <br>
  `webPreferences.nodeIntegration` can be disbled for renderer processes.
  <br>
  All dependencies can be [minified](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/), and [tree shaking](https://webpack.js.org/guides/tree-shaking/) might reduce the amount of included code.

  
  Disadvantage of this option is the inability to use native dependencies.
  <br>
  Also there's a possible duplication of dependency code between the main bundle and each renderer bundle
  <br>
  which however can be circumvented by configuring webpacks [DllPlugin](https://webpack.js.org/plugins/dll-plugin/).
  
2. Do not bundle external dependencies. 

  `require` calls will he handled at runtime through node, native dependencies can be used.
  <br>
  All `node_modules` will be included in the build,
  <br>
  `webPreferences.nodeIntegration` has to be enabled for each renderer process.

  Disadvantage of this option is an increase in size of the build since all dependencies are copied,
  <br>
  although this is [partially compensated by electron-builder](https://www.electron.build/configuration/contents) and can further be fine-tuned manually.
  <br>
  Also, nodes `require` [carries some overhead](https://github.com/electron/electron/issues/169).
  
3. Only bundle some dependencies.

  This approach combines the advantages of the two other options, but requires additional configuration effort.
  <br>
  Dependencies have to be split up between the two `package.json` files to avoid already bundled packages to be included in the build.
  
For the purpose of simplification we will proceed with the second approach, but I will provide a follow-up article outlining the third approach in detail.


