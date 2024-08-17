import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ imgSrc, title, description }) {
  return (
    <div className="product-card">
      <img 
        src={imgSrc} 
        alt={title} 
      />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <Link to="#" className="product-link">
        Explore ➔
      </Link>
    </div>
  );
}
