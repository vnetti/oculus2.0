import classes from "./Navbar.module.scss"
import Menu from "./Menu";
import Logo from "./Logo";
import Basket from "./Basket";

const Navbar = (props) => (
    <nav className={classes.nav}>
        <Menu menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
        <Logo/>
        <Basket/>
    </nav>
)

export default Navbar