//Component/SocialLinks.js
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGitlab } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link to="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <FaTwitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link to="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <FaLinkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link to="#" className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <FaGitlab className="h-5 w-5" />
        <span className="sr-only">GitLab</span>
      </Link>
    </div>
  );
}
