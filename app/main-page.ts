import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
import { ActionItem } from '@nativescript/core';

// ...

showPopupMenu(args) {
  const actionItem = args.object as ActionItem;
  const actionBar = actionItem.actionBar;

  const popupMenu = new PopupMenu();

  const menuItem1 = new MenuItem('Menu Item 1');
  const menuItem2 = new MenuItem('Menu Item 2');
  const menuItem3 = new MenuItem('Menu Item 3');

  popupMenu.items.push(menuItem1, menuItem2, menuItem3);

  popupMenu.on('menuItemTap', (menuItem) => {
    // Handle menu item tap event here
    console.log('Selected menu item:', menuItem.title);
  });

  popupMenu.show(actionBar);
}

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;

  page.bindingContext = new HelloWorldModel();
}
