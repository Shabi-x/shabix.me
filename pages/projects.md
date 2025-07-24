---
title: Projects - Shabix
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Current Focus:
    - name: '大O2及广告类项目'
      link: 'https://o2.qq.com'
      desc: '腾讯游戏广告投放买量系统'
      icon: '/images/project-icons/o2.jpg'
    - name: 'Flux Component'
      desc: '腾讯流量前端业务组件库'
      icon: '/images/project-icons/o2.jpg'

  Qingyou Project:
    - name: '南邮小程序'
      desc: '南京邮电大学校园小程序'
      icon: '/images/project-icons/nyxcx.jpg'
    - name: '南京邮电大学2023年度总结'
      link: 'https://mp.weixin.qq.com/s/wT1JyJcnjhGwW3EJ7qDj6g'
      desc: '2023年南京邮电大学本科生年度期末报告单'
      icon: '/images/project-icons/final.png'
    - name: '你头像真好看'
      link: 'https://mp.weixin.qq.com/s/6aBMTp9IHflUT948oLoJYw'
      desc: '南邮82周年校区创意换头像框微信小程序'
      icon: '/images/project-icons/avatarurl.png'
    - name: '青柚工作室官网'
      link: 'https://qingyou.njupt.edu.cn/'
      desc: '青柚工作室社团介绍官网'
      icon: '/images/project-icons/xcx.png'
    - name: '经济学院官网'
      link: 'https://jjxy.njupt.edu.cn/'
      desc: '南京邮电大学经济学院官网,基于webplus'
      icon: '/images/project-icons/jjxy.png'

  Toys:
    - name: 'TypeWriter Games'
      link: 'https://github.com/Shabi-x/TypeWriterGames'
      desc: '打字测速小游戏'
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
