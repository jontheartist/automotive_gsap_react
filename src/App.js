import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import gsap from "gsap";
import "./styles/App.scss";


// Component
import Header from "./styles/components/header";
import Navigation from "./styles/components/navigation"




// Pages
import Home from "./pages/home";
import CaseStudies from './pages/caseStudies'
import Approach from './pages/approach'
import Services from './pages/services'
import About from './pages/about'


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about-us', name: 'About Us', Component: About },
]


function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}



function App() {
  // prevents flashing from happening
  gsap.to('body', 0, { css: { visibility: "visible" } });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    //Set CSS Variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);



    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000)



    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }




  })


  return (
    <>
      <Header dimensions={dimensions} />
      {console.log(dimensions)}
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />

          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
