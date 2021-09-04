import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import UlsTur from "./components/pages/UlsTur";
import EdiinZasag from "./components/pages/EdiinZasag";
import Niigem from "./components/pages/Niigem";
import UulUurhai from "./components/pages/UulUurhai";
import Entertainment from "./components/pages/Entertainment";
import DelhiiDahind from "./components/pages/DelhiiDahind";
import Manai76 from "./components/pages/Manai76";
import HeaderPages from "./components/HeaderPages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HeaderPages />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ulsTur">
            <UlsTur />
          </Route>
          <Route path="/ediinZasag">
            <EdiinZasag />
          </Route>
          <Route path="/niigem">
            <Niigem />
          </Route>
          <Route path="/uulUurhai">
            <UulUurhai />
          </Route>
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/delhiiDahind">
            <DelhiiDahind />
          </Route>
          <Route path="/manai76">
            <Manai76 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
