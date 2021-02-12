//module.exports = {
//  someSidebar: {
//    Docusaurus: ['home', 'getting-started', 'doc1', 'doc2', 'doc3'],
//    Features: ['mdx'],
//  },
//};

module.exports = {
  doc: [
    {
      type: 'doc',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['install=mobile=apps', 'create-phonein-account', 'using-mobile=apps'],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['overview', 'installing-phonein', 'connecting-to-a-strike-lock'],
    },
  ],
};