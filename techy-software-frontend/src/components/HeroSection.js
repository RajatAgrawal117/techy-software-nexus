import { Link } from 'react-router-dom';
import webDeveloperImg from '../img/web-developer.jpg';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash the Power of Nexus Software
          </h1>
          <p className="hero-subtitle">
            Discover our cutting-edge web development solutions and transform your digital presence.
          </p>
          <Link to="/services" className="hero-button">
            Get Started
          </Link>
        </div>
        <div className="hero-image-container">
          <img
            src={webDeveloperImg}
            alt="Nexus Software"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
      </div>
    </section>
  );
}
