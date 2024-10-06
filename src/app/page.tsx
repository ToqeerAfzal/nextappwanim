"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HomePage = () => {
  const navRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Navbar animation
    gsap.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

    // Hero section animations
    gsap.fromTo(heroTitleRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    gsap.fromTo(heroTextRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.3 });
    gsap.fromTo(buttonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header ref={navRef} className="header">
        <nav className="navbar">
          <a href="#" className="logo">MyApp</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 ref={heroTitleRef}>Welcome to My Animated Next.js App!</h1>
          <p ref={heroTextRef}>Building amazing experiences with smooth animations.</p>
          <button ref={buttonRef} className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
