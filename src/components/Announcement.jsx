import { Link } from 'react-router-dom';

export default function Announcement({ pill, text, linkHref, linkText, light }) {
  if (!pill || !text) return null;

  const isExternal = linkHref && (
    linkHref.startsWith('mailto:') || 
    linkHref.startsWith('tel:') || 
    linkHref.startsWith('http:') || 
    linkHref.startsWith('https:') || 
    linkHref.startsWith('#')
  );

  return (
    <div className={`announcement${light ? ' announcement-light' : ''}`}>
      <span className="pill">{pill}</span>
      <span>{text}</span>
      {linkHref && linkText && (
        isExternal ? (
          <a href={linkHref}>{linkText}</a>
        ) : (
          <Link to={linkHref.startsWith('/') ? linkHref : `/${linkHref}`}>{linkText}</Link>
        )
      )}
    </div>
  );
}
