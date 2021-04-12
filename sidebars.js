module.exports = {
  someSidebar: [
    'Home',
    'Getting Started',
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: false,
      items: ['InstallationGuide/overview', 'InstallationGuide/installing-phonein', 'InstallationGuide/connecting-to-a-strike-lock'],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: ['UserGuide/install-apps', 'UserGuide/create-account', 'UserGuide/using-apps'],
    },
  ],
};
