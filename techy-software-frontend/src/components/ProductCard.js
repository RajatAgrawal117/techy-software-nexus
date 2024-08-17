//components/ProductCard.js
import Link from "next/link";

export default function ProductCard({ imgSrc, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img src={imgSrc} width={400} height={300} alt={title} className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105" style={{ aspectRatio: "400/300", objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#7367f0]/50 to-[#9e95f5]/50 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-primary-foreground">{title}</h3>
        <p className="text-lg text-primary-foreground">{description}</p>
        <Link href="#" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
