import Announcement from '../components/Announcement';
import HtmlContent from '../components/HtmlContent';
import { useDocumentTitle } from '../hooks/useSiteEffects';

export default function StaticPage({ meta, html }) {
  useDocumentTitle(meta?.title);

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
