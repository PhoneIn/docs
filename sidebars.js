module.exports = {
  someSidebar: [
    'Home',
    'Getting Started',
    {
      type: 'category',
      label: 'FAQ',
      collapsed: true,
      items: ['FAQ/general', 'FAQ/hosting', 'FAQ/office'],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: true,
      items: ['InstallationGuide/overview', 'InstallationGuide/installing-phonein', 'InstallationGuide/connecting-to-a-strike-lock'],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: ['UserGuide/install-apps', 'UserGuide/create-account', 'UserGuide/using-apps'],
    },
  ],
};
