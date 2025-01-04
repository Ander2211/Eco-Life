import React from 'react';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">LearnHub</div>
        <div className="nav-links">
          <NavLink href="/" label="Inicio" />
          <NavLink href="/blog" label="Blog Educativo" />
          <NavLink href="/challenges" label="Desafíos y Retos" />
          <NavLink href="/forum" label="Foro Comunitario" />
        </div>
      </div>

      <style>{`
        .navbar {
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .nav-content {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }

          .nav-links {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}