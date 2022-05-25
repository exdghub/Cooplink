export interface SideNavProps {
  openSideBar?: boolean;
  toggleDropdown?: boolean;
  onsideBarNav?:() => void;
  menu?: {
    type?: string; // "single" | "nested"
    // In case of single
    name?: string;
    img?: any;
    to?: string;
    // In case of nested
    title?: string;
    children?: {
      type?: string; //"one" | "many"
      // In case of one
      name?: string;
      to?: string;
      img?: any;
      // In case of many
      id?: string;
      parent?: string;
      url?: string;
      subItems?: {
        name?: string;
        to?: string;
        img?: any;
      }[];
    }[];
  }[];
}
