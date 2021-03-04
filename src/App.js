import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import RandomCat from "./components/RandomCat/RandomCat";
import ListOfBreed from "./components/RondomBreed/ListOfBreed";
import SearchDog from "./components/SearchforBreed/SearchDog";
import Headr from "./components/Headr";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Headr />
      <main>
        <Switch>
          <Route exact path="/" component={RandomCat} />
          <Route exact path="/listofbreads" component={ListOfBreed} />
          <Route exact path="/search" component={SearchDog} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
