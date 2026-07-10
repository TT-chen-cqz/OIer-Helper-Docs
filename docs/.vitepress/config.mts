import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OIer-Helper",
  description: "面向 OI / ICPC / 算法竞赛学习者的智能助手 Skill。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '安装', link: '/install/' },
      { text: '快速上手', link: '/use/' }
    ],

    sidebar: [
      {
        text: '安装',
        link: '/install/'
      },
      {
        text: '快速上手',
        link: '/use/'
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
