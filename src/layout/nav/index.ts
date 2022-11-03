import { NavbarItemData, Navbar, NavBarMenu } from './Navbar';

const menu: NavBarMenu = {
  start: [
    NavbarItemData.from('Home'),
    NavbarItemData.from('Blogs'),
    NavbarItemData.from('Abu'),
    NavbarItemData.from('Components'),
  ],
  end: [],
};

export const navbar = new Navbar({ state: menu });
