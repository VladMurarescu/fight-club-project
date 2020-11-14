import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Trainers from "./pages/Trainers/Trainers";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Subscription from "./pages/Subscription/Subscription";
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trainers">
          <Trainers />
        </Route>
        <Route exact path="/subscriptions">
          <Subscriptions />
        </Route>
        <Route
          exact
          path="/subscriptions/:id"
          children={<Subscription />}
        ></Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <ErrorComponent />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
