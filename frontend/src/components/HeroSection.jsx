import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="container py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
            Unleash the Power of Nexus Software
          </h1>
          <p className="text-lg text-primary-foreground md:text-xl">
            Discover our cutting-edge web development solutions and transform your digital presence.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
              Get Started
            </Link>
            <Link href="#" className="inline-flex items-center rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src="/placeholder.svg" width={800} height={600} alt="Nexus Software" className="h-full w-full object-cover object-center" style={{ aspectRatio: "800/600", objectFit: "cover" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7367f0]/50 to-[#9e95f5]/50" />
        </div>
      </div>
    </section>
  );
}
