import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OIer-Helper",
  description: "面向 OI / ICPC / 算法竞赛学习者的智能助手 Skill。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/install/' },
      { text: '快速上手', link: '/use/' }
    ],

    sidebar: [
      {
        text: '下载',
        link: '/install/'
      },
      {
        text: '快速上手',
        link: '/use/',
        items: [
          { "text": "项目介绍", "link": "/use/1" },
          { "text": "安装方法", "link": "/use/2" },
          { "text": "快速开始", "link": "/use/3" },
          { "text": "核心功能详解", "link": "/use/4" },
          { "text": "支持的 OJ 平台", "link": "/use/5" },
          { "text": "使用指南", "link": "/use/6" },
          { "text": "常见问题", "link": "/use/7" },
          { "text": "许可证", "link": "/use/8" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TT-chen-cqz/OIer-Helper' }
    ],

    search: { 
      provider: 'local'
    }, 
  }
})
