import React, { useState } from 'react';
import './VisitorHome.css';
import Footer from '../../Layouts/Footer';
import MenuBar from '../../Components/MenuBar';
import Header1 from '../../Layouts/Header1';
import AccessDeniedModal from '../../Components/AccessDeniedModal';

const restaurants = [
  { name: 'La Doze Restaurant', logo: '/images/ladoze.png', rating: 4 },
  { name: 'Yoobi Sushi', logo: '/images/yoobi.png', rating: 4.5 },
  { name: 'Choco Chino', logo: '/images/choco.png', rating: 4 },
  { name: 'Bucca Bistro', logo: '/images/bucca.png', rating: 4 },
  { name: 'NIYA', logo: '/images/niya.png', rating: 4 },
  { name: 'Golden China', logo: '/images/goldenchina.png', rating: 4.5 },
];

const VisitorHome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccessModal, setShowAccessModal] = useState(false);

  const closeMenu = () => setShowMenu(false);

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
    <div>
      <Header1 onMenuToggle={() => setShowMenu(!showMenu)} isMenuOpen={showMenu} />

      {showMenu && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
        />
      )}

      {showMenu && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          <MenuBar
            isVisitor={true}
            onMapDeniedClick={() => setShowAccessModal(true)}
          />
        </div>
      )}

      <main
        style={{
          marginTop: '60px',
          padding: '20px',
          marginLeft: showMenu ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
          overflowX: 'hidden',
        }}
      >
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
      </main>

      <Footer />

      {showAccessModal && (
        <AccessDeniedModal onClose={() => setShowAccessModal(false)} />
      )}
    </div>
  );
};

export default VisitorHome;
