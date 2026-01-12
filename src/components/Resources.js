import React from 'react';

const Resources = () => {
  // have to make google doc and link it here or i can do google api
  const GOOGLE_DOC_EMBED_URL = 'https://docs.google.com/document/d/e/YOUR_DOCUMENT_ID/pub?embedded=true';

  return (
    <section id="resources" className="section" style={{ background: 'var(--light-gray)' }}>
      <h2 className="section-title">Resources & Documentation</h2>
      <p className="section-subtitle">
        Access our comprehensive guide, curriculum materials, and learning resources.
      </p>

      <div className="docs-container">
        <iframe
          src={GOOGLE_DOC_EMBED_URL}
          className="docs-embed"
          title="CS for Each Resources"
        />
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', color: 'var(--medium-gray)' }}>
          Additional resources and materials:
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn-secondary">Download Curriculum</a>
          <a href="#" className="btn-secondary">Student Handbook</a>
          <a href="#" className="btn-secondary">Mentor Guide</a>
        </div>
      </div>
    </section>
  );
};

export default Resources;