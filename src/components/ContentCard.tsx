import React from 'react';

interface ContentCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ContentCard({ imageUrl, imageAlt, title, description }: ContentCardProps) {
  return (
    <div className="content-card  rounded-lg shadow-lg ">
      <div className="image-container mx-auto">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <style>{`
        .content-card {
          display: flex;
          padding: 1.4rem;
          background: white;
          border-radius: 1rem;
          
          
        }
        
        

        .image-container {
          flex-shrink: 0;
          width: 200px;
          height: 200px;
          border-radius: 0.5rem;
          overflow: hidden;
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
          font-size: rem;
          color: #333;
        }

        p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }



        @media (max-width: 720px) {
        
          .content-card {
            flex-wrap: wrap;

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
      }
      
      `}</style>
    </div>
  );
}