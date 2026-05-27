import { Link } from 'react-router-dom';

export default function Announcement({ pill, text, linkHref, linkText, light }) {
  if (!pill || !text) return null;
  return (
    <div className={`announcement${light ? ' announcement-light' : ''}`}>
      <span className="pill">{pill}</span>
      <span>{text}</span>
      {linkHref && linkText && (
        <Link to={linkHref.startsWith('/') ? linkHref : `/${linkHref}`}>{linkText}</Link>
      )}
    </div>
  );
}
