//components/ProductsService.js
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  const products = [
    { title: "Nexus Web Builder", description: "Effortlessly create stunning websites with our intuitive drag-and-drop interface.", imgSrc: "/placeholder.svg" },
    { title: "Nexus Analytics", description: "Gain valuable insights into your website's performance and user behavior.", imgSrc: "/placeholder.svg" },
    { title: "Nexus Cloud Hosting", description: "Host your website on our secure and scalable cloud infrastructure.", imgSrc: "/placeholder.svg" },
    { title: "Nexus E-commerce", description: "Launch your online store with our all-in-one e-commerce platform.", imgSrc: "/placeholder.svg" },
  ];

  return (
    <section id="products" className="container py-12 md:py-24 lg:py-32">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
          Explore Our Products and Services
        </h2>
        <p className="text-lg text-primary-foreground md:text-xl">
          Discover the range of innovative web development solutions we offer to help you succeed online.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {products.map((product) => (
          <ProductCard key={product.title} imgSrc={product.imgSrc} title={product.title} description={product.description} />
        ))}
      </div>
    </section>
  );
}
