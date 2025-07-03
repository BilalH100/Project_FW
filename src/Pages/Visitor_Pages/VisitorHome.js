// src/Pages/Visitor_Pages/VisitorHome.js
import React from 'react';
import './VisitorHome.css';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';

const restaurants = [
  {
    name: 'La Doze Restaurant',
    logo: '/images/ladoze.png',
    rating: 4,
  },
  {
    name: 'Yoobi Sushi',
    logo: '/images/yoobi.png',
    rating: 4.5,
  },
  {
    name: 'Choco Chino',
    logo: '/images/choco.png',
    rating: 3,
  },
  {
    name: 'Bucca Bistro',
    logo: '/images/bucca.png',
    rating: 2.5,
  },
];

const VisitorHome = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push(<span key={`full-${i}`}>★</span>);
    if (halfStar) stars.push(<span key="half">☆</span>);
    for (let i = stars.length; i < 5; i++) stars.push(<span key={`empty-${i}`}>☆</span>);

    return stars;
  };

  return (
    <>
      <Header />

      <div className="visitor-home">
        <header className="visitor-header">
          <span className="menu-icon">☰</span>
          <span className="header-title">Welcome Visitor</span>
          <span className="profile-icon">👤</span>
        </header>

        <h3 className="discover-text">Discover The<br />Unexpected</h3>

        <div className="guest-message">
          You’re browsing as a guest. <a href="/landing">Create an account</a> for full access.
        </div>

        <div className="restaurant-grid">
          {restaurants.map((restaurant, index) => (
            <div className="restaurant-card" key={index}>
              <img src={restaurant.logo} alt={restaurant.name} className="restaurant-logo" />
              <h4>{restaurant.name}</h4>
              <div className="stars">{renderStars(restaurant.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VisitorHome;
