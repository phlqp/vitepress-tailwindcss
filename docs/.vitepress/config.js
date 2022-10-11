export default {
    title: 'Vitepress & TailwindCSS',
    cleanUrls: 'without-subfolders',
    themeConfig: {
      nav: [
        { text: 'Child', link: '/child/' },
      ],
      sidebar: {
        '/child/' : [
          {
            text: 'Introduction',
            link: '/child/',
            items: [
              { text: 'A', link: '/child/a', },
            ]
          }
        ],
      }
    }
  }
