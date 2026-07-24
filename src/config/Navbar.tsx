export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    // {
    //   label: 'Blogs',
    //   href: '/blog',
    // },
    {
      label: 'Projects',
      href: '/projects',
    },
     {
      label: 'Resume',
      href: '/resume',
    },
    {
      label: 'Certificates',
      href: '/certificates',
    },
  ] as NavItem[],
};
