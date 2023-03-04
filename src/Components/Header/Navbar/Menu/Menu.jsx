import classes from "./Menu.module.scss";
import MenuLink from "./MenuLink";
import Burger from "./Burger";
import classNames from "classnames";

const Menu = (props) => {
    const LINKS = {
        shop: {
            id: "shop",
            title: "Shop",
            href: "#",
        },
        games: {
            id: "games",
            title: "Games",
            href: "#",
        },
        metaverse: {
            id: "metaverse",
            title: "Metaverse",
            href: "#",
        },
    };


    return (
        <ul className={classNames(classes.menu, props.menuActive && classes.active)}>
            <Burger menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
            <MenuLink links={LINKS.shop}/>
            <MenuLink links={LINKS.games}/>
            <MenuLink links={LINKS.metaverse}/>
        </ul>
    );
};
export default Menu;