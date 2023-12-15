import classes from "./Video.module.scss"
import video from "../../../../images/Features/graphic-video.jpg";

const Video = (props) => {
    return (
        <div className={classes.video}>
            <img src={video} alt="graphic-video"/>
            <button className={classes.play}>{/*<img src={play} alt="play"/>*/}</button>
        </div>
    )
}

export default Video