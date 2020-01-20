export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e253482f1f886edb139c817',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-nfgvbbfj',
                  apiId: 'cb5f392d-a3e7-4101-bcda-d29a741c4a28'
                },
                {
                  buildHookId: '5e253482882d5746cd594e72',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-egbsexjv',
                  apiId: '00133ecc-6c63-441f-9390-40c214771b6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sunakshijain/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-egbsexjv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
