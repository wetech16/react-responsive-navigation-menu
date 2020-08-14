import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const navLinks = [
		{
			text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Contact',
			path: '/contact',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Blog',
			path: '/blog',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Portfolio',
			path: '/portfolio',
			icon: 'ion-ios-briefcase'
		}
  ]
  
  return (
    <div className="App">
      <Router>
          <Home path="/home" />
          <Portfolio path="/portfolio" />
          <Contact path="/contact" />
          <About path="/about" />
          <Blog path="/blog" />

      </Router>
    </div>
  );
}

export default App;
