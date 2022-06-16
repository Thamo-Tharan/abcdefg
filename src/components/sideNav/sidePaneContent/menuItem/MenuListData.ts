import { Icons } from '../../../../shared/GlobalStyle'

export interface SiteMenuItem {
  id: string
  name: string
  src: string
  alt: string
  category: string
  hasSubMenu: boolean
  hasSelected:boolean
}

export const SiteMenuList = [
  {
    id: 'Profile',
    name: 'John Smith',
    src: Icons.Profile,
    alt: 'Settings icon',
    category: 'profile',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'Account',
    name: 'Account',
    src: Icons.Accounts,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'Document',
    name: 'Document',
    src: Icons.Document,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: false,
    hasSelected:false
  },
  
  {
    id: 'Research',
    name: 'Wedbush Research',
    src: Icons.Research,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'Quotes',
    name: 'Quotes & Charts',
    src: Icons.Quotes,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'Contact Us',
    name: 'Contact Us',
    src: Icons.Message,
    alt: 'Settings icon',
    category: 'default',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'Settings',
    name: 'Settings',
    src: Icons.Settings,
    alt: 'Settings icon',
    category: 'action',
    hasSubMenu: false,
    hasSelected:false
  },
  {
    id: 'LogOut',
    name: 'LogOut',
    src: Icons.LogOut,
    alt: 'Log out icon',
    category: 'action',
    hasSubMenu: false,
    hasSelected:false
  },
]
