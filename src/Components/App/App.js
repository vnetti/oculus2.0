import classes from './App.module.scss';
import Header from "../Header/";
import {useState} from "react";
import Hero from "../Hero";

function App() {
    const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={classes.App}>
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
        <main>
            <Hero />
        </main>
    </div>
  );
}

export default App;
