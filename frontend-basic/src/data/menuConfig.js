import MainPage from "../pages/MainPage";
import DesignerPage from '../pages/DesignerPage';

export const MENU_DEFINITION = [
    {id: 1, name: "Main Page", href: "/", exact: true, external: false, default: true, component: MainPage},
    {id: 2, name: "Designer", href: "/designer", exact: false, component: DesignerPage}
];
