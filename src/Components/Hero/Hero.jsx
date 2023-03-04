import classes from "./Hero.module.scss"
import Buttons from "../Buttons";
import bgImage from "../../images/Hero/bg.jpg"

const Hero = (props) => (
    <section
        className={classes.hero}
        style={{backgroundImage: `url(${bgImage})`}}
    >
        <div className="container">
            <div className={classes.inner}>
                <h1 className={classes.title}>Meta Quest 2</h1>
                <p className={classes.offerTitle}>Get an Elite Strap free</p>
                <p className={classes.offerText}>For a limited time only, save $59.99 USD. Offer ends 1/19/23</p>
                <Buttons />
            </div>
        </div>
    </section>
)

export default Hero