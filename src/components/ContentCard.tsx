import React from 'react';

interface ContentCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ContentCard({ imageUrl, imageAlt, title, description }: ContentCardProps) {
  return (
    <div className="content-card">
      <div className="image-container">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <style>{`
        .content-card {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .image-container {
          flex-shrink: 0;
          width: 200px;
          height: 200px;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #e5ffe5;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          flex-grow: 1;
        }

        h1 {
          margin: 0 0 1rem 0;
          font-size: 2rem;
          color: #333;
        }

        p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}