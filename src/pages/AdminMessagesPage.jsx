import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useSiteEffects';

export default function AdminMessagesPage() {
  useDocumentTitle('Admin Console');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedPassword = sessionStorage.getItem('admin_session_key');
    if (savedPassword === 'ty-admin-2026') {
      setIsAuthenticated(true);
      fetchInquiries(savedPassword);
    }
  }, []);

  const fetchInquiries = async (pwd) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/inquiries', {
        headers: {
          'X-Admin-Password': pwd,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch enquiries. Invalid credentials.');
      }

      const data = await res.json();
      setMessages(data.inquiries || []);
    } catch (err) {
      setError(err.message || 'An error occurred.');
      setIsAuthenticated(false);
      sessionStorage.removeItem('admin_session_key');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/inquiries', {
        headers: {
          'X-Admin-Password': password,
        },
      });

      if (!res.ok) {
        throw new Error('Incorrect password. Please try again.');
      }

      const data = await res.json();
      setMessages(data.inquiries || []);
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_session_key', password);
    } catch (err) {
      setError(err.message || 'An error occurred.');
      setIsAuthenticated(false);
      sessionStorage.removeItem('admin_session_key');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessages([]);
    setPassword('');
    sessionStorage.removeItem('admin_session_key');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    const pwd = sessionStorage.getItem('admin_session_key') || '';
    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, {
        method: 'DELETE',
        headers: {
          'X-Admin-Password': pwd,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete inquiry.');
      }

      const updated = messages.filter((item) => item.id !== id);
      setMessages(updated);
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      alert(err.message || 'Could not delete enquiry.');
    }
  };

  const handleClearAll = async () => {
    if (!window.confirm('Are you sure you want to delete all saved messages? This cannot be undone.')) return;

    const pwd = sessionStorage.getItem('admin_session_key') || '';
    try {
      const res = await fetch('/api/admin/inquiries?id=all', {
        method: 'DELETE',
        headers: {
          'X-Admin-Password': pwd,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to clear messages.');
      }

      setMessages([]);
      setSelectedMessage(null);
    } catch (err) {
      alert(err.message || 'Could not clear enquiries.');
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Date', 'First Name', 'Last Name', 'Email', 'Company', 'Service', 'Message'];
    const rows = messages.map(msg => [
      msg.id,
      new Date(msg.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
      msg.firstName || '',
      msg.lastName || '',
      msg.email || '',
      msg.company || '',
      msg.service || '',
      (msg.message || '').replace(/"/g, '""')
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n');

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", `contact_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredMessages = messages.filter(m => {
    const query = searchTerm.toLowerCase();
    return (
      m.firstName?.toLowerCase().includes(query) ||
      m.lastName?.toLowerCase().includes(query) ||
      m.email?.toLowerCase().includes(query) ||
      m.company?.toLowerCase().includes(query) ||
      m.service?.toLowerCase().includes(query) ||
      m.message?.toLowerCase().includes(query)
    );
  });

  if (!isAuthenticated) {
    return (
      <>
        <section className="page-hero bg-theme" style={{ padding: '120px 0 60px' }}>
          <div className="wrap">
            <div className="page-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/contact">Contact</Link>
              <span>/</span>
              <span>Admin Console</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Admin Console</h1>
            <p className="page-hero-lead" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
              Please enter the security password to view form enquiries.
            </p>
          </div>
        </section>

        <section className="section" style={{ minHeight: '50vh', background: '#fcfcfc', display: 'flex', alignItems: 'center' }}>
          <div className="wrap" style={{ width: '100%', maxWidth: '480px' }}>
            <div style={{
              background: '#fff',
              border: '1px solid var(--rule)',
              borderRadius: '16px',
              padding: '40px 30px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--ink)' }}>Access Security</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px' }}>
                This console requires a valid administrator password to retrieve messages.
              </p>

              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                    Security Password
                  </label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    style={{
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--rule)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '12px', color: '#dc2626', fontWeight: '600', margin: '0' }}>
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    background: 'var(--orange)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    opacity: isLoading ? 0.7 : 1
                  }}
                >
                  {isLoading ? 'Verifying...' : 'Access Dashboard'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero bg-theme" style={{ padding: '80px 0 16px' }}>
        <div className="wrap">
          <div>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/contact">Contact</Link>
              <span>/</span>
              <span>Admin Dashboard</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Enquiries Dashboard</h1>
            <p className="page-hero-lead" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
              View and manage submissions captured from the contact form.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ minHeight: '60vh', background: '#fcfcfc', paddingTop: '16px', paddingBottom: '16px' }}>
        <div className="wrap">
          {/* Top Row with Logout Button separated */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <button 
              onClick={handleLogout}
              style={{
                background: '#fee2e2',
                border: '1px solid #fca5a5',
                color: '#dc2626',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>

          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
            background: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid var(--rule)'
          }}>
            <div style={{ display: 'flex', gap: '16px', flex: '1', minWidth: '280px', alignItems: 'center' }}>
              <div style={{
                background: 'rgba(255, 71, 19, 0.08)',
                color: 'var(--orange)',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: '800',
                fontSize: '18px',
                textAlign: 'center',
                minWidth: '70px',
                border: '1px solid rgba(255, 71, 19, 0.15)'
              }}>
                {messages.length}
              </div>
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--rule)',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handleExportCSV}
                disabled={messages.length === 0}
                style={{
                  background: 'var(--ink)',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  opacity: messages.length === 0 ? 0.5 : 1,
                  transition: 'opacity 0.2s'
                }}
              >
                Export Excel 📥
              </button>
              <button 
                onClick={handleClearAll}
                disabled={messages.length === 0}
                style={{
                  background: '#dc2626',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  opacity: messages.length === 0 ? 0.5 : 1,
                  transition: 'opacity 0.2s'
                }}
              >
                Clear All 🗑️
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: selectedMessage ? '1.2fr 1fr' : '1fr', gap: '30px', transition: 'all 0.3s ease' }}>
            
            {/* List / Table Area */}
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              border: '1px solid var(--rule)',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
            }}>
              {isLoading ? (
                <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--muted)' }}>
                  <h3>Loading messages...</h3>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--muted)' }}>
                  <h3>No messages found</h3>
                  <p style={{ marginTop: '8px' }}>Submissions stored in the server will appear here.</p>
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: '#f9fafb', borderBottom: '1px solid var(--rule)' }}>
                        <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Date</th>
                        <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Sender</th>
                        <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Company</th>
                        <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Service</th>
                        <th style={{ padding: '16px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMessages.map((msg) => (
                        <tr 
                          key={msg.id}
                          onClick={() => setSelectedMessage(msg)}
                          style={{
                            borderBottom: '1px solid #f3f4f6',
                            cursor: 'pointer',
                            background: selectedMessage?.id === msg.id ? 'var(--orange-pale)' : 'transparent',
                            transition: 'background 0.2s'
                          }}
                        >
                          <td style={{ padding: '16px', fontSize: '14px', color: 'var(--body)' }}>
                            {new Date(msg.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                          </td>
                          <td style={{ padding: '16px', fontSize: '14px' }}>
                            <div style={{ fontWeight: '600', color: 'var(--ink)' }}>{msg.firstName} {msg.lastName}</div>
                            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{msg.email}</div>
                          </td>
                          <td style={{ padding: '16px', fontSize: '14px', color: 'var(--body)' }}>{msg.company}</td>
                          <td style={{ padding: '16px', fontSize: '14px' }}>
                            <span style={{
                              background: 'rgba(255, 71, 19, 0.08)',
                              color: 'var(--orange)',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}>
                              {msg.service}
                            </span>
                          </td>
                          <td style={{ padding: '16px', textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleDelete(msg.id)}
                              style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#dc2626',
                                cursor: 'pointer',
                                fontSize: '14px',
                                padding: '4px 8px',
                                borderRadius: '4px'
                              }}
                            >
                              Delete 🗑️
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Message Details Sidebar Panel */}
            <AnimatePresence>
              {selectedMessage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    border: '1px solid var(--rule)',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    height: 'fit-content',
                    position: 'sticky',
                    top: '100px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--ink)' }}>Message Details</h3>
                    <button 
                      onClick={() => setSelectedMessage(null)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: '18px',
                        cursor: 'pointer',
                        color: 'var(--muted)'
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Sender</span>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>{selectedMessage.firstName} {selectedMessage.lastName}</div>
                      <div style={{ fontSize: '14px', color: 'var(--body)' }}>{selectedMessage.email}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Company</span>
                      <div style={{ fontSize: '15px', color: 'var(--ink)' }}>{selectedMessage.company}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Service of Interest</span>
                      <div style={{ fontSize: '15px', color: 'var(--ink)' }}>{selectedMessage.service}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Date Received</span>
                      <div style={{ fontSize: '15px', color: 'var(--ink)' }}>
                        {new Date(selectedMessage.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '16px' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700' }}>Message</span>
                      <p style={{
                        marginTop: '8px',
                        fontSize: '14px',
                        color: 'var(--body)',
                        lineHeight: '1.6',
                        background: '#f9fafb',
                        padding: '16px',
                        borderRadius: '8px',
                        whiteSpace: 'pre-wrap'
                      }}>
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>
    </>
  );
}
