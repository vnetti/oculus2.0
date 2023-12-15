import classes from "./Article.module.scss"

const Article = (props) => {
    return (
        <article className={classes.article}>
            <h3>Graphics</h3>
            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible</p>
        </article>
    )
}

export default Article