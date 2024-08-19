import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGitlab, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SocialLinks.css'; // Assuming you have a CSS file for the component

export default function SocialLinks() {
  return (
    <div className="social-links-container">
      <Link
        to="https://www.instagram.com/nexusinfo.in/"
        className="social-link"
      >
        <FaInstagram className="social-icon" />
        <span className="sr-only"></span>
      </Link>
      <Link
        to="https://www.facebook.com/people/Nexus-Info/61560989377318/?mibextid=LQQJ4d&rdid=h6EegI89lAVwbFm2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FchBu6tfu8D9P88vq%2F%3Fmibextid%3DLQQJ4d"
        className="social-link"
      >
        <FaFacebook className="social-icon" />
        <span className="sr-only"></span>
      </Link>
      <Link
        to="https://www.linkedin.com/company/nexus-software-pvt-ltd/"
        className="social-link"
      >
        <FaLinkedin className="social-icon" />
        <span className="sr-only"></span>
      </Link>
    </div>
  );
}
