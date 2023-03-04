import classes from "./MenuLink.module.scss"

const MenuLink = (props) => (
    <li className={classes.item}>
        <a
            href={props.links.href}
            className={classes.itemLink}
        >{props.links.title}</a>
    </li>
)

export default MenuLink