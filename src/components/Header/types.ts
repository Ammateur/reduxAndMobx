export interface MenuItemType {
  name: string;
  menuChildren: MenuChildrenType[];
  isActive: boolean;
  url: string;
}
export interface MenuChildrenType {
  label: string;
  url: string;
}
