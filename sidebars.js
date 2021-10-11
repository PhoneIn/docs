module.exports = {
  someSidebar: [
    'Home',
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: true,
      items: ['InstallationGuide/overview', 'InstallationGuide/installing_phonein', 'InstallationGuide/setup_app', 'InstallationGuide/connecting-to-a-strike-lock'],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: ['UserGuide/using_app', 'UserGuide/managing_devices', 'UserGuide/managing_keys', 'UserGuide/phonein_hardware'],
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsed: true,
      items: ['FAQ/general', 'FAQ/hosting', 'FAQ/office', 'FAQ/compatibility'],
    },
    'Troubleshooting',
    'about_phonein',
  ],
};
