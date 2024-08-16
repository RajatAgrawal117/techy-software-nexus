import Link from "next/link";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import GitlabIcon from "./icons/GitlabIcon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link href="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
        <TwitterIcon className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
        <LinkedinIcon className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
        <GitlabIcon className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  );
}
