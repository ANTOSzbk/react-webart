import React from "react";

import { Switch, Route } from "react-router-dom";

import Articles from "../Articles";
import Nav from "../../components/Nav";
import Article from "../Article";
import Category from "../Category";
import LanguageDropdown from "../../components/LanguageDropdown"
import { LanguageProvider } from "../../components/LanguageProvider/LanguageProvider";

function App() {
  return (
    <div className="wrap">
      <LanguageProvider>
        <LanguageDropdown />
        <Nav />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/:name/:id" component={Article} exact />
          <Route path="/:name" component={Category} exact />
        </Switch>
      </LanguageProvider>
    </div>
  );
}

export default App;
