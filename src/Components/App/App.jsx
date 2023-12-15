import classes from './App.module.scss';
import Header from "../Header/";
import {useState} from "react";
import Hero from "../Hero";
// import Features(old) from "../Features";

function App() {
    const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={classes.App}>
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
        <main>
            <Hero />
            {/*<Features />*/}
        </main>
    </div>
  );
}

export default App;
