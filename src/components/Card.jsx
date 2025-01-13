import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ title, content, image, link }) => {
  return (
    <BootstrapCard className="h-100 shadow-sm">
      <BootstrapCard.Img variant="top" src={image} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{content}</BootstrapCard.Text>
        {link && (
          <a href={link} className="btn btn-primary">
            Learn More
          </a>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;