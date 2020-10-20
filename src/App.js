import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { About, Calculator, ContactUs, Home } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            404 - Oops you are lost <Link to="/">Get me back to safety</Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
