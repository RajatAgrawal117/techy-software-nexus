import './ProductsService.css';
import ProductCard from "./ProductCard";
import webDeveloperImg from '../img/web-developer.jpg';
import analyticsImg from '../img/analytics.jpg';
import cloudImg from '../img/cloud.jpg';
import eCommerceImg from '../img/e-commerce.jpg';

export default function ProductsSection() {
  const products = [
    { title: "Nexus Web Builder", description: "Effortlessly create stunning websites with our intuitive drag-and-drop interface.", imgSrc: webDeveloperImg },
    { title: "Nexus Analytics", description: "Gain valuable insights into your website's performance and user behavior.", imgSrc: analyticsImg },
    { title: "Nexus Cloud Hosting", description: "Host your website on our secure and scalable cloud infrastructure.", imgSrc: cloudImg },
    { title: "Nexus E-commerce", description: "Launch your online store with our all-in-one e-commerce platform.", imgSrc: eCommerceImg },
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-section-header">
        <h2 className="products-section-title">Our Services</h2>
        <p className="products-section-subtitle">Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.title} imgSrc={product.imgSrc} title={product.title} description={product.description} />
        ))}
      </div>
    </section>
  );
}
