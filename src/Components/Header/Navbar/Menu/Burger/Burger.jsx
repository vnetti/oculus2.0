import classes from "./Burger.module.scss"
import classNames from "classnames";

const Burger = (props) => (
    <li
        className={classNames(classes.burger, props.menuActive && classes.active)}
        onClick={() => props.setMenuActive(!props.menuActive)}
    >
        <svg className={classes.show} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19M1 9H19M1 17H19" stroke="#5C5C5E" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <svg className={classes.hide} width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.49997C2.99984 8.50015 11.9998 2.16665 12.9998 1.49999C13.9998 0.833339 14.9998 1.49998 14.9998 2.49998L14.9998 19.5C14.9998 20.5 13.9451 21.1301 12.9998 20.5C12.0546 19.8698 2.9998 13.4997 1.99999 12.5C1.00019 11.5002 1.00016 10.4998 2 9.49997Z" stroke="#5C5C5E" stroke-width="2"/>
        </svg>




    </li>
)

export default Burger