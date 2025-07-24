---
title: Projects - Shabix
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Current Focus:
    - name: 'O2'
      link: 'https://github.com/vitejs/devtools'
      desc: 'Inspect the intermediate state of Vite bundle and pipeline'
      icon: 'i-simple-icons-vite'

  Nuxt Ecosystem:
    - name: 'Nuxt'
      link: 'https://github.com/nuxt/nuxt'
      desc: 'The intuitive Vue Framework. (Team member)'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt Playground'
      link: 'https://github.com/nuxt/learn.nuxt.com'
      desc: 'Interactive Playground for learning Nuxt'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt DevTools'
      link: 'https://github.com/nuxt/devtools'
      desc: 'Unleash Nuxt Developer Experience'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt ESLint'
      link: 'https://github.com/nuxt/eslint'
      desc: 'All-in-one ESLint module for Nuxt'
      icon: 'i-simple-icons-eslint'
    - name: 'Nuxt Icon'
      link: 'https://github.com/nuxt/icon'
      desc: 'Use thousands of icons in Nuxt'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt Test Utils'
      link: 'https://github.com/nuxt/test-utils'
      desc: 'Testing utilities for Nuxt powered by Vitest. (In collabration with @danielroe)'
      icon: 'i-carbon-test-tool'
    - name: 'Nuxt Server Functions'
      link: 'https://github.com/antfu/nuxt-server-fn'
      desc: 'Server functions in client for Nuxt 3'
      icon: 'i-carbon-function saturate-0'

  DevTools:
    - name: 'Nuxt DevTools'
      link: 'https://github.com/nuxt/devtools'
      desc: 'Unleash Nuxt Developer Experience'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Node Modules Inspector'
      link: 'https://github.com/antfu/node-modules-inspector'
      desc: 'Visualize and inspect your node_modules'
      icon: 'i-solar-black-hole-line-duotone'
    - name: 'ESLint Config Inspector'
      link: 'https://github.com/eslint/config-inspector'
      desc: 'A visual tool for inspecting and understanding your ESLint flat configs.'
      icon: 'i-simple-icons:eslint'
    - name: 'vite-plugin-inspect'
      link: 'https://github.com/antfu/vite-plugin-inspect'
      desc: 'Inspect the intermediate state of Vite plugins'
      icon: 'i-carbon-search-locate'

---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
