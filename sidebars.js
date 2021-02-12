//module.exports = {
//  someSidebar: {
//   Docusaurus: ['home', 'getting-started', 'doc1', 'doc2', 'doc3'],
//   Features: ['mdx'],
//  },
//};

module.exports = {
  docs: [
    {
      type: 'doc',
      label: 'Home',
      item: ['home'],
    },
    {
      type: 'doc',
      label: 'Getting Started',
      item: ['getting-started'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['install-mobile-apps', 'create-phonein-account', 'using-mobile-apps'],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['overview', 'installing-phonein', 'connecting-to-a-strike-lock'],
    },
  ],
};