import type {IPropsNavItem} from '../../../types/src'

/**
 * @function handleNavItemSourceClick
 * @description If the provided item has a path or if there is no path or source given, it will prevent the default
 * event click (which can be used to redirect to a provided path).
 * Otherwise, it redirects to the provided URL (reloads per window.location.href).
 * @param {IPropsNavItem} item Accepts an object containing the path and URL of the navigation item
 * @param {any} event Defines the event object
 */
export function handleNavItemSourceClick(
    item: IPropsNavItem,
    event: any,
): void {
    if (item.url) window.location.href = item.url;
    else if (item.path || (!item.path && !item.url)) event.preventDefault();
}
