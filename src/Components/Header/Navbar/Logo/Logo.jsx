import classes from "./Logo.module.scss"
import logo from "../../../../images/logo.png"

const Logo = (props) => (
    <div className={classes.logo}>
        <a
            href="#"
        ><img
            src={logo}
            alt="oculus"/>
        </a>
    </div>
)

export default Logo