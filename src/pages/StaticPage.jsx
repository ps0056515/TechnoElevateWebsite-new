import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: 'spring',
        stiffness: 110,
        damping: 18,
        mass: 0.8
      }}
    >
      <Announcement
        pill={meta?.announcement?.pill}
        text={meta?.announcement?.text}
        linkHref={meta?.announcement?.linkHref || null}
        linkText={meta?.announcement?.linkText}
      />
      <HtmlContent html={html} />
    </motion.div>
  );
}
