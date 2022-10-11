export default {
    title: 'Vitepress & TailwindCSS',
    cleanUrls: 'without-subfolders',
    themeConfig: {
      nav: [
        { text: 'Child', link: '/child/' },
        { text: 'Child1', link: '/child1/' },
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
