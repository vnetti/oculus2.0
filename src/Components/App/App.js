import classes from './App.module.scss';
import Header from "../Header/";
import {useState} from "react";

function App() {
    const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={classes.App}>
        <test />
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default App;
