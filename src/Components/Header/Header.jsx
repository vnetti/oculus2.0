import classes from "./Header.module.scss"
import Navbar from "./Navbar";

const Header = (props) => (
    <header className={classes.header}>
        <div className={"container"}>
            <Navbar menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
        </div>
    </header>
)

export default Header