import Link from "next/link";
import SocialLinks from "./SocialLinks";
import NetworkIcon from "./icons/NetworkIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <NetworkIcon className="h-6 w-6 text-primary" />
          <span className="text-primary">Nexus Software</span>
        </Link>
        <Nav />
        <SocialLinks />
      </div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="hidden gap-4 md:flex">
      <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
        Home
      </Link>
      <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
        About Us
      </Link>
      <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
        Products/Services
      </Link>
      <Link href="#" className="text-sm font-medium text-primary-foreground hover:underline" prefetch={false}>
        Contact Us
      </Link>
    </nav>
  );
}
