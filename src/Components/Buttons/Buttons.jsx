import classes from "./Buttons.module.scss"

const Buttons = (props) => {
    const price = "399,99 USD";

    return (
        <>
            <div className={classes.buttons}>
                <a
                    href={"#"}
                    className={classes.buy}
                >
                    Buy now
                </a>
                <p className={classes.price}>
                    {price}
                </p>
            </div>
            <p className={classes.underText}>Meta Quest 2 is for ages 13+</p>
        </>
    )

}

export default Buttons