import Announcement from '../components/Announcement';
import HtmlContent from '../components/HtmlContent';
import { useDocumentTitle } from '../hooks/useSiteEffects';

function decodeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

export default function StaticPage({ meta, html }) {
  useDocumentTitle(decodeHtml(meta?.title));

  return (
    <>
      <Announcement
        pill={meta?.announcement?.pill}
        text={meta?.announcement?.text}
        linkHref={meta?.announcement?.linkHref ? `/${meta.announcement.linkHref.replace(/^\//, '')}` : null}
        linkText={meta?.announcement?.linkText}
      />
      <HtmlContent html={html} />
    </>
  );
}
