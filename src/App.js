import React, { useRef, useEffect, useState } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

//Elements
import LoadingPage from "./components/elements/Loading";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  console.log("loading", loading);
  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <>
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
          {loading && <LoadingPage show={loading} image="./../../assets/images/BG.png" />}
        </>
      )}
    />
  );
};

export default App;
