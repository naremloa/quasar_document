module.exports = {
  lang: 'zh-TW',
  base: '/quasar_document/',
  title: 'Quasar Framework 文檔',
  description: 'Document',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: 'naremloa/quasar_document',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '編輯此頁',
    lastUpdated: '最後更新於',
    nav: [
      { text: 'Components', link: '/component/introduction' },
    ],
    sidebar: {
      collapsable: false,
      '/component/': [
        {
          text: 'Components',
          collapsable: false,
          children: [
            { text: '介紹', link: '/component/introduction' },
            { text: '平台偵測', link: '/component/platform_detection' },
            { text: '全局事件總線', link: '/component/global_event_bus' },
            { text: 'Vue原型注入', link: '/component/vue_prototype_injections' },
            { text: '國際化 I18n', link: '/component/internationalization' },
            { text: 'RTL support' }
          ]
        },
        {
          text: 'Style & Identity',
          collapsable: false,
          children: [
            { text: '調色板', link: '/component/color_palette' },
            { text: 'Stylus 變數', link: '/component/stylus_variables' },
            { text: 'Icons', link: '/component/icons' },
          ],
        },
      ],
    },
  }
}