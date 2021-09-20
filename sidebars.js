module.exports = {
  someSidebar: [
    'Home',
    'Getting Started',
    {
      type: 'category',
      label: 'FAQ',
      collapsed: true,
      items: ['FAQ/general', 'FAQ/hosting', 'FAQ/office', 'FAQ/compatibility'],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: true,
      items: ['InstallationGuide/overview', 'InstallationGuide/installing-phonein', 'InstallationGuide/connecting-to-a-strike-lock', 'InstallationGuide/wifi'],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: ['UserGuide/install-apps', 'UserGuide/create-account', 'UserGuide/using-apps'],
    },
    'Troubleshooting',
  ],
};
