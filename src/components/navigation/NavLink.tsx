import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const updateActive = () => {
      setIsActive(window.location.pathname === href);
    };

    updateActive();
    window.addEventListener('popstate', updateActive);
    return () => window.removeEventListener('popstate', updateActive);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== href) {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {label}
      <style>{`
        .nav-link {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #333;
          background: #f5f5f5;
        }

        .nav-link.active {
          color: #fff;
          background: #333;
        }
      `}</style>
    </a>
  );
}