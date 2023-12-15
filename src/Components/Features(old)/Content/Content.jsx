import classes from "./Content.module.scss"
import graphic from '../../../images/Features/graphic.jpg'
import controls from '../../../images/Features/controls.jpg'
import processor from '../../../images/Features/graphic.jpg'
import setUpYourPlayArea from '../../../images/Features/graphic.jpg'
import gardianActivity from '../../../images/Features/graphic.jpg'
import headsetCasting from '../../../images/Features/graphic.jpg'
import Article from "./Article";
import Video from "./Video";
import classNames from "classnames";

const Content = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.items.map((item, index) => {
                const imageNames = [graphic, controls, processor, setUpYourPlayArea, gardianActivity, headsetCasting]
                return (
                    <div
                        key={item.name}
                        id={item.name}
                        className={classNames(classes.mainImage, (props.currentFeature === item.name && classes.mainImageActive))}
                    >
                        <img src={imageNames[index]} alt={item.name}/>
                    </div>
                )
            })}


            {/*<img src={image} alt="Graphic"/>*/}
            <Article/>
            <Video/>
        </div>
    )
}

export default Content