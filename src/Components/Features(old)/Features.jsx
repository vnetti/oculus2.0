import classes from "./Features.module.scss";
import FeaturesMenu from "./FeaturesMenu";
import Content from "./Content";
import classNames from "classnames";
import {useState} from "react";

const Features = (props) => {
    const ITEMS = [
        {
            key: "graphics",
            name: "Graphics",
            title: "Easy to set up and safe to use",
            articleText: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",

        }, {
            key: "controls",
            name: "Controls",
            title: "Somebody title",
            articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat itaque nemo praesentium similique. Asperiores culpa laborum perspiciatis tempore voluptatum?",

        }, {
            key: "processor",
            name: "Processor",
            title: "Somebody title",
            articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat itaque nemo praesentium similique. Asperiores culpa laborum perspiciatis tempore voluptatum?",

        }, {
            key: "setUpYourPlayArea",
            name: "Set up your play area",
            title: "Somebody title",
            articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat itaque nemo praesentium similique. Asperiores culpa laborum perspiciatis tempore voluptatum?",

        }, {
            key: "gardianActivity",
            name: "Gardian activity",
            title: "Somebody title",
            articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat itaque nemo praesentium similique. Asperiores culpa laborum perspiciatis tempore voluptatum?",

        }, {
            key: "headsetCasting",
            name: "Headset casting",
            title: "Somebody title",
            articleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat itaque nemo praesentium similique. Asperiores culpa laborum perspiciatis tempore voluptatum?",

        },]

    const [currentFeature, setCurrentFeature] = useState("Graphics");



    return (
        <section>
            <div className="container">
                <div className={classNames("sectionInner", classes.wrapper)}>
                    <h2 className={'sectionTitle'}>Product features</h2>
                    <p className={classNames('sectionHeading', classes.heading)}>Easy to set up and safe to use</p>
                    <FeaturesMenu currentFeature={currentFeature} setCurrentFeature={setCurrentFeature} items={ITEMS} />
                    <Content currentFeature={currentFeature} setCurrentFeature={setCurrentFeature} items={ITEMS} />
                </div>
            </div>
        </section>
    );
};

export default Features;