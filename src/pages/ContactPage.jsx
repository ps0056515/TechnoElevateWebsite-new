import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Announcement from '../components/Announcement';
import { useDocumentTitle } from '../hooks/useSiteEffects';
import { SITE } from '../config/site';

export default function ContactPage() {
  useDocumentTitle('Contact');
  const [btnText, setBtnText] = useState('Send Message');
  const [btnStyle, setBtnStyle] = useState({});

  useEffect(() => {
    document.body.className = '';
    return () => {
      document.body.className = '';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SITE.useWeb3Forms && !SITE.useLocalJson) {
      alert('Message submission is disabled by configuration.');
      return;
    }

    setBtnText('Sending...');
    setBtnStyle({ opacity: 0.8 });

    const formData = new FormData(e.target);
    const dataObject = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    let web3Success = false;
    let localSuccess = true;

    // 1. Submit to Web3Forms
    if (SITE.useWeb3Forms) {
      formData.append('access_key', SITE.web3FormsAccessKey);
      formData.append('subject', 'New Contact Form Submission - Innovexce');
      formData.append('from_name', `${dataObject.firstName} ${dataObject.lastName}`);
      formData.append('replyto', dataObject.email);
      formData.append('theme', 'orange');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const resData = await response.json();
        if (response.status !== 200 && !resData.success) {
          web3Success = false;
        }
      } catch (err) {
        console.error('Web3Forms submission error:', err);
        web3Success = false;
      }
    }

    // 2. Save locally as JSON via backend API
    if (SITE.useLocalJson) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        });
        if (!response.ok) {
          localSuccess = false;
        }
      } catch (err) {
        console.error('Local JSON save error:', err);
        localSuccess = false;
      }
    }

    if (web3Success && localSuccess) {
      setBtnText('Message Sent ✓');
      setBtnStyle({ background: '#059669' });
      e.target.reset();
    } else if (!web3Success && localSuccess) {
      setBtnText('Saved (Web3Forms failed) ✓');
      setBtnStyle({ background: '#d97706' });
      e.target.reset();
    } else {
      setBtnText('Error Sending');
      setBtnStyle({ background: '#dc2626' });
    }

    setTimeout(() => {
      setBtnText('Send Message');
      setBtnStyle({});
    }, 4000);
  };

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  const formElementVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 14 }
    }
  };

  return (
    <>
      <Announcement 
        pill="Contact" 
        text="Our team typically responds within one business day — Bengaluru HQ with global delivery across six regions." 
        linkHref="mailto:contactus@testyantra.com" 
        linkText="Email us directly →" 
      />

      <section className="page-hero bg-theme bg-contact">
        <motion.div 
          className="page-hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Let's talk about<br /><em>your next project.</em></h1>
          <p className="page-hero-lead">
            Whether you have a product idea, a legacy system to modernise, a team to scale, or just want to explore — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <div className="s-eyebrow">Get in Touch</div>
          <h2 className="s-title">Let's talk about<br />your next project.</h2>
          
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Left Content Column */}
            <motion.div className="c-left" variants={itemLeftVariants}>
              <p className="s-sub">
                Whether you have a product idea, a legacy system to modernise, a team to scale, or just want to explore — we'd love to hear from you.
              </p>
              <div className="c-points">
                <div className="c-point">
                  <div className="c-icon">🌐</div>
                  <div>
                    <h5>Website</h5>
                    <a href="https://www.innovexce.com" target="_blank" rel="noopener noreferrer">
                      www.innovexce.com
                    </a>
                  </div>
                </div>
                
                <div className="c-point">
                  <div className="c-icon">✉️</div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:contactus@testyantra.com">
                      contactus@testyantra.com
                    </a>
                  </div>
                </div>

                <div className="c-point">
                  <div className="c-icon">🏢</div>
                  <div>
                    <h5>Headquarters</h5>
                    <p>Bengaluru, India — Development unit of TestYantra Software Solutions</p>
                  </div>
                </div>

                <div className="c-point">
                  <div className="c-icon">📍</div>
                  <div>
                    <h5>Global Presence</h5>
                    <p>India &nbsp;·&nbsp; United States &nbsp;·&nbsp; United Kingdom &nbsp;·&nbsp; APAC &nbsp;·&nbsp; Europe &nbsp;·&nbsp; Middle East</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content Form Column */}
            <motion.div className="c-form" variants={itemRightVariants}>
              <div className="c-form-title">Send us a message</div>
              <div className="c-form-sub">Our team typically responds within one business day.</div>
              
              <form onSubmit={handleSubmit}>
                <div className="f-row">
                  <motion.div className="fg" variants={formElementVariants}>
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="Priya" required />
                  </motion.div>
                  <motion.div className="fg" variants={formElementVariants}>
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Sharma" required />
                  </motion.div>
                </div>

                <motion.div className="fg" variants={formElementVariants}>
                  <label>Work Email</label>
                  <input type="email" name="email" placeholder="priya@company.com" required />
                </motion.div>

                <motion.div className="fg" variants={formElementVariants}>
                  <label>Company</label>
                  <input type="text" name="company" placeholder="Your company name" required />
                </motion.div>

                <motion.div className="fg" variants={formElementVariants}>
                  <label>Service of Interest</label>
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Choose a service...</option>
                    <option value="Application Development">Application Development</option>
                    <option value="Cloud, DevOps & SRE">Cloud, DevOps &amp; SRE</option>
                    <option value="Observability & Platform Engineering">Observability &amp; Platform Engineering</option>
                    <option value="AI & Data Engineering">AI &amp; Data Engineering</option>
                    <option value="Migration & Modernisation">Migration &amp; Modernisation</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="ERP & Platform Integration">ERP &amp; Platform Integration</option>
                    <option value="IoT & Edge Computing">IoT &amp; Edge Computing</option>
                    <option value="Staff Augmentation">Staff Augmentation</option>
                  </select>
                </motion.div>

                <motion.div className="fg" variants={formElementVariants}>
                  <label>Tell us about your project</label>
                  <textarea name="message" placeholder="Describe what you're building or the challenge you're solving..." required></textarea>
                </motion.div>

                <motion.button 
                  type="submit" 
                  className="f-submit" 
                  id="fBtn"
                  style={btnStyle}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {btnText}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
