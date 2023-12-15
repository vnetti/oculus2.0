import classes from "./FeaturesMenu.module.scss"
import classNames from "classnames";

const FeaturesMenu = (props) => {
    const handleFeatureClick = (e) => {
        props.setCurrentFeature(e.target.id)
    }

    return (
        <ul className={classes.menu}>
            {props.items.map((item, index) => (
                <li
                    key={item.name}
                    id={item.name}
                    onClick={(handleFeatureClick)}
                    className={classNames(classes.item, (props.currentFeature === item.name && classes.itemActive))}
                >
                    {index < 10 && "0" + (index + 1) + " " + item.name}
                </li>
            ))}
        </ul>
    )
}

export default FeaturesMenu